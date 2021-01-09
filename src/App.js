import React from 'react';
import './App.css';
import './CustomStyles.css'
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
import { PicturesPage } from './features/pictures/PicturesPage';
import { EditPage } from './features/edit/EditPage';
import { InfoPage } from './features/info/InfoPage';
import { initializeFirebase } from './functions';

import {
  useFirestoreDocData,
  useFirestore,
  SuspenseWithPerf
} from "reactfire";
import { ManageItems } from './features/admin/items/ManageItems';

function Milz() {
  // lazy load the Firestore SDK
  // and create a ref
  const milzRef = useFirestore()
    .collection("items")
    .doc("1600282297713")

  const milz = useFirestoreDocData(milzRef)
  return (
    <p>
      The milz is { milz.name }
    </p>
  )
}


function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <SuspenseWithPerf
          fallback={<p>loading...</p>}
          traceId={"loading-status"}
          >
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
                <Route exact path="/admin/items/:id" component={EditPage} />
                <Route exact path="/admin/items" component={ManageItems} />
                <Route exact path="/info" component={InfoPage} />
                <Redirect to="/" />
              </Switch>
            </div>   
          </main>
        </SuspenseWithPerf>        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
