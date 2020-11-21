import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg,setSelectedImg}) => {
    const handleImg=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="larger pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            ></motion.img>
        </motion.div>
    )
}

export default Modal
