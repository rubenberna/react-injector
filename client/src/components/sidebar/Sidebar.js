import React, { useState, Suspense, lazy } from 'react';
import { Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import { Home } from '../home/Home';
const FirstApp = lazy(() => import('../appOne/AppOne'))
const AppTwo = lazy(() => import('../appTwo/AppTwo'))


const Segments = {
  HOME: 'HOME',
  APP_ONE: 'APP_ONE',
  APP_TWO: 'APP_TWO',
};

export const AppSidebar = () => {
  const [visibleSegment, setVisibleSegment] = useState(Segments.HOME);

  const renderSegments = (name) => ({
    [Segments.HOME]: <Home/>,
    [Segments.APP_ONE]: <Suspense fallback={<div>Loading...</div>}><FirstApp/></Suspense>,
    [Segments.APP_TWO]: <Suspense fallback={<div>Loading...</div>}><AppTwo/></Suspense>,
  })[name];

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            icon='labeled'
            inverted
            vertical
            visible={true}
            width='thin'
          >
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.HOME)} active={visibleSegment === Segments.HOME}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_ONE)} active={visibleSegment === Segments.APP_ONE}>
              <Icon name='font'/>
              Npm package
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_TWO)} active={visibleSegment === Segments.APP_TWO}>
              <Icon name='bold'/>
              Imported files
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            {renderSegments(visibleSegment)}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};