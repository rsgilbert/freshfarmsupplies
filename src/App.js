import React from 'react';
import { IndexPage } from './features/index/IndexPage'
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import { Footer } from './components/Footer'
import { ItemListPage } from './features/itemlist/ItemListPage';
import { Header } from './components/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <main>
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={ItemListPage} />
              <Redirect to="/" />
            </Switch>
          </div>   
        </main>
      </Router>
    </div>
  );
}

export default App;
