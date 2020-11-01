import React, {useEffect, useRef, useState} from 'react';
import {FileUploadForm} from '../fileUpload/FileUploadForm';
import { useImportScript } from '../../utils/useImportScript';
import {FileUploaded} from '../fileUpload/FileUploaded';
import ReactDOM from 'react-dom'

const AppTwo = () => {
  const appTwoRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState();


  const appendJsFile = (ref, pathToFile) => {
    const script = document.createElement('script')
    script.src = pathToFile
    script.async = true
    ref.appendChild(script)
  }

  const Demo = (pathToFile) => {
    useImportScript(pathToFile)
  }


  // useEffect(() => {
  //   if (appTwoRef.current && uploadedFile)
  //     appendJsFile(appTwoRef, uploadedFile)
  // }, [appTwoRef, uploadedFile]);

  return (
    <div className="main-segment">
      <div className="h-flex-column">
        <h2>Import files</h2>
        <FileUploadForm setUploadedFile={setUploadedFile}/>
        <FileUploaded uploadedFile={uploadedFile}/>
      </div>
      { uploadedFile && <Demo/> }
      <div ref={appTwoRef} id="app-two" />
    </div>
  );
};

export default AppTwo;

