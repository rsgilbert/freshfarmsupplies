// import * as firebase from "firebase/app"

export function getIdFromWindow() {
    // pathname could be "/items/1"
    const pathname = window.location.pathname
    return pathname.substring(7)
}

export function initializeFirebase() {
    // Generated from https://console.firebase.google.com/project/tsc-feedback/settings/general/web:ODhjMWNlMDktMDc4ZS00ZWZlLTg1MjItMTY5NTIyNTFlOTg5
    const firebaseConfig = {
        apiKey: "AIzaSyAV3vZxXS4A4iE0N3ZIlUQwo09B7yl47og",
        authDomain: "tsc-feedback.firebaseapp.com",
        databaseURL: "https://tsc-feedback.firebaseio.com",
        projectId: "tsc-feedback",
        storageBucket: "tsc-feedback.appspot.com",
        messagingSenderId: "157433617722",
        appId: "1:157433617722:web:d5fdcaf003f34418b80403",
        measurementId: "G-QJMBGW5K5H"
      };
    // Initialize Firebase
    // if(!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }
}





