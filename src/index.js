import React, { Component } from 'react';
import ReactDOM,  { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { fetchItems, watchItems } from './features/itemlist/itemlistSlice';
import {
  FirebaseAppProvider
} from "reactfire";

// store.dispatch(fetchItems())
// store.dispatch(watchItems())

const firebaseConfig = {
  apiKey: "AIzaSyAiFmYX7tWxC5F6amDtJnDiOfxzipveCoY",
  authDomain: "milzcollection.firebaseapp.com",
  databaseURL: "https://milzcollection.firebaseio.com",
  projectId: "milzcollection",
  storageBucket: "milzcollection.appspot.com",
  messagingSenderId: "366091822440",
  appId: "1:366091822440:web:9e2380ed7b9649ac0962dd",
  measurementId: "G-WCRBDJZ4D2"
};


function MyAppComplexity() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </FirebaseAppProvider>
  )
}


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Enable Concurrent Mode
// https://reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode
createRoot(document.getElementById('root')).render(<MyAppComplexity />)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()
