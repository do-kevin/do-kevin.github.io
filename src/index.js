import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./static/css/normalize.min.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.querySelector("#root"));
serviceWorker.unregister();