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
import { ItemPage } from './features/item/ItemPage';
import { CartPage } from './features/cart/CartPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={ItemListPage} />
              <Route exact path="/items/:itemId" component={ItemPage} />
              <Route exact path="/cart" component={CartPage} />
              <Redirect to="/" />
            </Switch>
          </div>   
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
