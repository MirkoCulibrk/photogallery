import React ,{useState,useEffect}from 'react'
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';

const useStorage=(file)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);

    useEffect(()=>{
        //reference to firebase
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        storageRef.put(file).on('state_changed',(snapshot)=>{
            //defining process
            let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(progress);
            console.log(`Upload is done ${progress} %`);
            //type of state
            switch(snapshot.state){
                case 'paused':
                    console.log("Upload is paused");
                    break;
                    case 'running':
                        console.log('Upload is running');
                        break;


            }
        },(error)=>{
            //function for catching error
            setError(error);
        },async()=>{
            //function when upload is complete
            const url=await storageRef.getDownloadURL();
             const createdAt=timestamp();
            collectionRef.add({url,createdAt})
            setUrl(url);
        }
        );
    },[file]);
    //returning url,error and progress for other function
    return{progress,url,error};
}
  


export default useStorage
