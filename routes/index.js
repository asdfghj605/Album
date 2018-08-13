var express = require('express');
var router = express.Router();
var firebaseDB = require('../connection/database');
var firebase = require('../connection/auth');
var firebaseAuth = firebase.auth();
router.get('/', function (req, res) {
    res.render('login', { title: '登入' });
})
router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.passwd;
    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(function(user){
            req.session.uid = user.uid;
            res.redirect('/');
        })

        .catch(function(error){
            
        })
})
module.exports = router;