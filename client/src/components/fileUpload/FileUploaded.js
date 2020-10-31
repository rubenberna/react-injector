import React from 'react'

export const FileUploaded = ({uploadedFile}) => {

  console.log(uploadedFile);
    return (
      <>
      {uploadedFile &&
      <div>
      <h3>{uploadedFile.name}</h3>
        <img src={uploadedFile.filePath} alt={uploadedFile.name}/>
      </div>}
      </>
    )
}