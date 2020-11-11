import React, {lazy, Suspense, useState} from 'react';
import GitHubProfile from 'react-switch-app-one';
import {Input} from 'semantic-ui-react';

const GithubProfiler = lazy(() => import('react-switch-app-one'));
const Counter = lazy(() => import('@ruben.bernardes.dev/counter'));

const FirstApp = () => {
  const [searchInput, setSearchInput] = useState();

  // const loadedApps = [
  //   {
  //     name: 'Gitbub profiler',
  //     component: <Suspense fallback={<div>Loading...</div>}><GithubProfiler/></Suspense>
  //   },
  //   {
  //     name: 'Counter',
  //     component: <Suspense fallback={<div>Loading...</div>}><Counter/></Suspense>
  //   },
  // ]

  const loadedApps = [
    {
      name: 'Gitbub profiler',
      component: ['react-switch-app-one']
    },
    {
      name: 'Counter',
      component: ['@ruben.bernardes.dev/counter']
    },
  ];


  return (
    <div className="main-segment">
      <div className="app-one">
        <GitHubProfile searchInput={searchInput} text='Search for a Github username'/>
        <Input onChange={(e) => setSearchInput(e.target.value)} placeholder="Type username"/>
      </div>
    </div>
  );
};

export default FirstApp;

// {loadedApps.map(app => {
//   return (
//     <div key={app.name}>
//       <h3>{app.name}</h3>
//       <Suspense fallback={<div>Loading</div>}>
//         {app.component.map((component, index) => {
//           const DynamicLazyComponent = lazy(() =>
//             import(
//               /* webpackChunkName: "my-chunk-name" */
//               /* webpackMode: "lazy" */
//               `${component}`).then(comp => comp))
//           return <DynamicLazyComponent key={index}/>
//         })}
//       </Suspense>
//     </div>
//   );
// })}