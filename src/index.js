//react imports
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// config
import { APP_ROOT } from "./config/variables.js";

//application import
import App from "./App";

ReactDOM.render(<App />, APP_ROOT);
registerServiceWorker();
