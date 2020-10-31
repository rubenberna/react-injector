import React, {useState} from 'react';
import axios from 'axios';
import {InputFile} from 'semantic-ui-react-input-file';
import {Button} from 'semantic-ui-react';


export const FileUploadForm = ({setUploadedFile}) => {
  const [file, setFile] = useState();
  const [filename, setFileName] = useState('Choose File');
  const [error, setError] = useState('');

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const reset = () => {
    setFile(undefined);
    setFileName('Choose File');
    setError(undefined);
    setUploadedFile({});
  };

  const uploadFile = async () => {
    if (!file) {
      setError('Please add file first');
    } else {
      setError('');
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const {fileName, filePath} = res.data;
        setUploadedFile({fileName, filePath});
      } catch (e) {
        if (e.res.status === 500) {
          console.log('there was a problem with the server');
        }
        setError(JSON.stringify(e));
      }
    }
  };

  return (
    <>
      <div className="h-flex-row">
        <InputFile
          input={{
            id: 'input-control-id',
            onChange: handleUpload
          }}
        />
        <Button onClick={uploadFile}>Upload file</Button>
        {error && file &&
        <Button basic onClick={reset}>
          Clear
        </Button>}
      </div>
      {error &&
      <>
        <span style={{color: 'red'}}>{error}</span>
      </>
      }
      <span>{filename}</span>
    </>
  );
};