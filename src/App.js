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
import { SearchPage } from './features/search/SearchPage';
import { AdminPage } from './features/admin/AdminPage';
import { NewItemPage } from './features/newitem/NewItemPage';
import { initializeFirebase } from './functions';
import { PicturesPage } from './features/pictures/PicturesPage';


function App() {
  initializeFirebase()

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
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/admin/new" component={NewItemPage} />
              <Route exact path="/admin/items/:id/pictures" component={PicturesPage} />
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
