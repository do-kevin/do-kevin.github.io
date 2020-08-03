import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from 'AppRoutes';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const render = (Component: React.Component | any) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(AppRoutes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
