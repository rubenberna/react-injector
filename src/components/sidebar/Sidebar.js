import React, { useState } from 'react';
import { Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import { Home } from '../home/home';
import { AppOne } from '../appOne/AppOne';
import { AppTwo } from '../appTwo/AppTwo';

const Segments = {
  HOME: 'HOME',
  APP_ONE: 'APP_ONE',
  APP_TWO: 'APP_TWO',
};

export const AppSidebar = () => {
  const [visible, setVisible] = React.useState(false);
  const [visibleSegment, setVisibleSegment] = useState(Segments.HOME);

  const renderSegments = (name) => ({
    [Segments.HOME]: <Home/>,
    [Segments.APP_ONE]: <AppOne/>,
    [Segments.APP_TWO]: <AppTwo/>,
  })[name];

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}} onMouseOver={() => setVisible(true)}
                          onMouseOut={() => setVisible(false)}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical

            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.HOME)}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_ONE)}>
              <Icon name='gamepad'/>
              App 1
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_TWO)}>
              <Icon name='camera'/>
              App 2
            </Menu.Item>
          </Sidebar>

          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            inverted
            vertical
            visible={visible}
          >
            <Menu.Item as='a' header>
              File Permissions
            </Menu.Item>
            <Menu.Item as='a'>Share on Social</Menu.Item>
            <Menu.Item as='a'>Share by E-mail</Menu.Item>
            <Menu.Item as='a'>Edit Permissions</Menu.Item>
            <Menu.Item as='a'>Delete Permanently</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            {renderSegments(visibleSegment)}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};