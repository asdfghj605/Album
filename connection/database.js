
var admin = require("firebase-admin");

var serviceAccount = require("../albums-b0104-firebase-adminsdk-kgg3b-bc914ddd09.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://albums-b0104.firebaseio.com"
});

var db = admin.database();

module.exports = db;