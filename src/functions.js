import * as firebase from "firebase/app"

export function getIdFromWindow() {
    // pathname could be "/items/1"
    const pathname = window.location.pathname
    return pathname.substring(7)
}


// eg 
// for http://localhost:3000/admin/items/kRx9WrRtwRjGrmzULbik/pictures
// id = getIdFromPath(3)
export function getIdFromPath (position) {
  const pathname = window.location.pathname
  const paths = pathname.split("/")
  return paths[position]
}

export function initializeFirebase() {
    // Generated from https://console.firebase.google.com/project/tsc-feedback/settings/general/web:ODhjMWNlMDktMDc4ZS00ZWZlLTg1MjItMTY5NTIyNTFlOTg5
    const firebaseConfig = {
      apiKey: "AIzaSyBFmGQu9lVqNZKFRBz05vuvn3VAU829CGE",
      authDomain: "education-0.firebaseapp.com",
      databaseURL: "https://education-0.firebaseio.com",
      projectId: "education-0",
      storageBucket: "education-0.appspot.com",
      messagingSenderId: "540449373743",
      appId: "1:540449373743:web:b61c805bd3fc050040d0da",
      measurementId: "G-L2FL8956E6"
    };
    // Initialize Firebase
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}





