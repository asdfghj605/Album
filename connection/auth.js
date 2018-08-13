
var firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyBB3RsLnPdZZvPLok0DzTDhpJV2U9Yw1qs",
    authDomain: "albums-b0104.firebaseapp.com",
    databaseURL: "https://albums-b0104.firebaseio.com",
    projectId: "albums-b0104",
    storageBucket: "albums-b0104.appspot.com",
    messagingSenderId: "960604392000"
  };
  firebase.initializeApp(config);

  module.exports = firebase ;