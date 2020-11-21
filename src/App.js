import Title from './components/Title';
import './App.css';
import UploadFile from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { useState } from 'react';
function App() {
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <>
      <Title></Title>
      <UploadFile>
        
      </UploadFile>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </>
  );
}

export default App;
