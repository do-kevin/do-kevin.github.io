import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { imported } from 'react-imported-component/macro';
import { App } from 'components';

const Home = imported(() => import('screens/Home'));

class AppRoutes extends Component {
  render() {
    // Checks if homepage in package.json exists
    const basename = process.env.PUBLIC_URL || undefined;

    return (
      <Router basename={basename}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default AppRoutes;
