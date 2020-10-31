import React, {useState} from 'react';
import { FileUploadForm } from '../fileUpload/FileUploadForm';
import { FileUploaded } from '../fileUpload/FileUploaded';

export const Home = () => {
  const [uploadedFile, setUploadedFile] = useState({});

  return (
    <div className="main-segment">
      <div className="h-flex-column">
        <h2>React Injector</h2>
        <FileUploadForm setUploadedFile={setUploadedFile}/>
        <FileUploaded uploadedFile={uploadedFile}/>
      </div>
    </div>
  );
}


