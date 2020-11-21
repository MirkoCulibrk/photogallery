import {useState,useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore=(collection)=>{
    const [docs,setDocs]=useState([]);

    useEffect(()=>{
        //sending image collection or other
        const unsub= projectFirestore.collection(collection)
            .orderBy('createdAt','desc')
            .onSnapshot((snapshot)=>{
                let documents=[];
                snapshot.forEach(doc=>{
                    documents.push({...doc.data(),id:doc.id});
                })
                setDocs(documents);
            });
           
            //clean up function if images grid dont exist
            return ()=>{
                unsub();
            }
    },[collection]);
    return {docs};
}
export default useFirestore;