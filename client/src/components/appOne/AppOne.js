import React, { useState } from 'react';
import { AppOne } from 'react-switch-app-one'
import { Input } from 'semantic-ui-react'

const FirstApp = () => {
  const [searchInput, setSearchInput] = useState()
  return (
    <div className="main-segment">
      <div className="app-one">
        <AppOne searchInput={searchInput} text='Search for a Github username'/>
        <Input onChange={(e) => setSearchInput(e.target.value)} placeholder="Type username"/>
      </div>
    </div>
  );
}

export default FirstApp