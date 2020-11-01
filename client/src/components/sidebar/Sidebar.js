import React, { useState } from 'react';
import { Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import { Home } from '../home/Home';
import { FirstApp } from '../appOne/AppOne';
import { AppTwo } from '../appTwo/AppTwo';


const Segments = {
  HOME: 'HOME',
  APP_ONE: 'APP_ONE',
  APP_TWO: 'APP_TWO',
};

export const AppSidebar = () => {
  const [visibleSegment, setVisibleSegment] = useState(Segments.HOME);

  const renderSegments = (name) => ({
    [Segments.HOME]: <Home/>,
    [Segments.APP_ONE]: <FirstApp/>,
    [Segments.APP_TWO]: <AppTwo/>,
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
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.HOME)}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_ONE)}>
              <Icon name='font'/>
              App 1
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_TWO)}>
              <Icon name='bold'/>
              App 2
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