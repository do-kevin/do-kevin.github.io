import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';

ReactDOM.render(<App />, document.querySelector("#root"));
LogRocket.init('d6pvgs/portfolio-github-pages');
serviceWorker.unregister();