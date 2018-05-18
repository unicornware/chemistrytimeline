//react imports
import * as React from 'react';

//react-router imports
import { BrowserRouter, Route } from 'react-router-dom';

//config imports
import * as routes from './config/routes.js';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/css/app.min.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="" debug>
          <React.Fragment>
            <p>
              To get started, edit <code>src/App.jsx</code> and save to reload.
            </p>
          </React.Fragment>
        </Analytics>
      </BrowserRouter>
    );
  }
}
