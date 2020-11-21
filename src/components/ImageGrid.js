import React from 'react'
import useFirestore from '../Hooks/useFireStore'; 
import {motion} from 'framer-motion';
const ImageGrid = ({setSelectedImg}) => {
    const {docs}=useFirestore('images');
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc=>{
                return(
                <motion.div className="img-wrap"
                    whileHover={{opacity:1}}
                    layout
                >
                    <motion.img src={doc.url} alt={doc.id} onClick={()=>setSelectedImg(doc.url)}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    ></motion.img>
                </motion.div>
                )
            })}
            
        </div>
    )
}

export default ImageGrid
