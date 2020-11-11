import React, {lazy, Suspense, useState} from 'react';
import {Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {Home} from '../home/Home';

const FirstApp = lazy(() => import('../appOne/AppOne'));
const SecondApp = lazy(() => import('../appThree/AppThree'));
const GHub = lazy(() => import('react-switch-app-one'));
const Count = lazy(() => import('@ruben.bernardes.dev/counter'));

const packagesPaths = ['react-switch-app-one', '@ruben.bernardes.dev/counter'];
const importComponent = async path => {
  const promise = await lazy(async () => await import(path).catch((e) => console.log(e)));
  return await Promise.resolve(promise);
};

const loadedAppPaths = packagesPaths.map(async app => importComponent(app));

// 1. WORKS - but with static import
const loadedApps = [
  {
    name: 'Gitbub profiler',
    component: <GHub/>
  },
  {
    name: 'Count',
    component: <Count/>
  },
];

// 2. Doesn't work: component is always a promise
const renderList = packagesPaths.map((app, index) => ({
  name: index,
  component: importComponent(app)
}));

// 3. Doesn't work: uncaught module
const navEntries = loadedAppPaths.reduce((acc, Comp, idx) => ({
  ...acc,
  [`APP_${idx}`]: <Suspense fallback={<div>Loading...</div>}><Comp/></Suspense>
}), {});

// 4. Doesn't work: it's not a valid React.jsx
const otherNavEntries = async _ => {
  const promises = packagesPaths.map(async (path, idx) => {
    const obj = {};
    const Comp = await lazy(() => import(path).catch(e => console.log(e)));
    obj[`APP_${idx}`] = <Comp/>;
    return obj;
  });
  return await Promise.all(promises);
};

const Segments = {
  HOME: 'HOME',
  APP_ONE: 'APP_0',
  APP_TWO: 'APP_1',
};

export const AppSidebar = () => {
  const [visibleSegment, setVisibleSegment] = useState(Segments.HOME);

  const renderSegments = (name) => ({
    [Segments.HOME]: <Home/>,
    ...otherNavEntries()
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
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.HOME)}
                       active={visibleSegment === Segments.HOME}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_ONE)}
                       active={visibleSegment === Segments.APP_ONE}>
              <Icon name='font'/>
              Npm package
            </Menu.Item>
            <Menu.Item as='a' onClick={() => setVisibleSegment(Segments.APP_TWO)}
                       active={visibleSegment === Segments.APP_TWO}>
              <Icon name='bold'/>
              Npm package
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Suspense fallback={<div>Loading...</div>}>
              {/*{loadedApps.map(comp => comp.component)}*/}
              {/*{components.map(comp => comp)}*/}
              {/*{renderList.map(app => app.component)}*/}
              {renderSegments(visibleSegment)}
            </Suspense>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};
