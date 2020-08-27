import React from 'react';
import { IndexPage } from './features/index/IndexPage'
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="app">
      <Router>
        <main className="main">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
