import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCC0wHAFfTLuWiU-Ok71u9H2oFJ7O1fwug",
    authDomain: "photowall-2d609.firebaseapp.com",
    databaseURL: "https://photowall-2d609.firebaseio.com",
    projectId: "photowall-2d609",
    storageBucket: "photowall-2d609.appspot.com",
    messagingSenderId: "739084434985"
  };
  firebase.initializeApp(config);

  const database=firebase.database()
  export {database}

  