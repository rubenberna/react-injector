import React from 'react';
import { Header, Container } from 'semantic-ui-react'
import { NpmLogo, JSFileIcon } from '../icons';

export const Home = () => {

  return (
    <div className="main-segment">
      <div className="h-flex-column home">
        <Header as='h1'>React switch</Header>
        <div className='h-flex-row'>
          <NpmLogo className="h-small-margin-right"/>
          <Header as='h2'>App One</Header>
        </div>
        <Container>
          <p>
            Imports components as npm packages using react-create-library. Developers can develop components isolated, it can be lazy imported, so not included in the main bundle and it's easy to communicate via props with the main app.
          </p>
          <p>The current example takes a text and a search input from the main app, which the package uses to fetch and render Github profiles. Only the <span style={{ fontStyle: 'italic'}}>input field</span> belongs to this app</p>
        </Container>
        <div className='h-flex-row'>
          <JSFileIcon className="h-small-margin-right"/>
          <Header as='h2'>App Two</Header>
        </div>
        <Container>
          <p>
            At the moment it takes any file input, sends it to an express server, which moves it to a 'uploads' folder in the static client > public directory and it renders the file as an image.
          </p>
          <p style={{ fontWeight: 600, color: '#616161'}}>Challenges:</p>
          <ul>
            <li>Didn't yet find a way to mount a js file into the ReactDOM -- since it normally takes an actual component and all three files (libraries, launch and app code) are normally needed to mount a React app.</li>
            <li>With useRef, I can access a DOM node. I've tried to append a script to it (the app code bundle), but it forces the DOM to rerender so, it's lost right afterwards</li>
          </ul>
        </Container>
      </div>
    </div>
  );
}


