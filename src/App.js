import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import { MuiThemeProvider } from '@material-ui/core';

import NFY from "./views/NFY";
import BitAlliance from "./views/BitAlliance";
import Tek from "./views/tek";
// import ChurcheOfTheChain from './views/ChurcheOfTheChain';
// import Eros from './views/Eros';
// import Mimir from './views/Mimir';
// import Pantheon from './views/Pantheon';
import Layout from "./layout";
import Diamond from "./views/Diamond";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <NFY />
          </Layout>
        </Route>
        <Route path="/nfy" exact>
          <Layout>
            <NFY />
          </Layout>
        </Route>
        <Route path="/diamond" exact>
          <Layout>
            <Diamond />
          </Layout>

          {/* </Route>
                <Route path="/churche-of-the-chain" exact>
                    <Layout>
                        <ChurcheOfTheChain />
                    </Layout>
                </Route>
                <Route path="/eros" exact>
                    <Layout>
                        <Eros />
                    </Layout>
                </Route>
                <Route path="/mimir" exact>
                    <Layout>
                        <Mimir />
                    </Layout>
                </Route>
                <Route path="/pantheon" exact>
                    <Layout>
                        <Pantheon />
                    </Layout> */}
        </Route>
        <Route path="/tek" exact>
          <Layout>
            <Tek />
          </Layout>
        </Route>
        <Route path="/bit-alliance" exact>
          <Layout>
            <BitAlliance />
          </Layout>
        </Route>
        <Redirect to="/nfy">
          <Layout>
            <NFY />
          </Layout>
        </Redirect>
      </Switch>
    </Router>
  );
}

export default App;
