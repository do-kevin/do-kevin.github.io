import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import LogRocket from "logrocket";

ReactDOM.render(<App />, document.querySelector("#root"));
LogRocket.init(process.env.REACT_APP_LOGROCKET_INIT_ID);
serviceWorker.unregister();