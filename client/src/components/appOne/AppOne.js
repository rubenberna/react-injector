import React, { useState } from 'react';
import { AppOne } from 'react-switch-app-one'


export const FirstApp = () => {
  const [searchInput, setSearchInput] = useState()
  return (
    <div className="main-segment">
      <div className="app-one">
        <AppOne searchInput={searchInput} text='Search for a Github username'/>
        <input onChange={(e) => setSearchInput(e.target.value)}/>
      </div>
    </div>
  );
}