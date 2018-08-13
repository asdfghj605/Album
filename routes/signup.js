var express = require('express');
var router = express.Router();
var firebaseDB = require('../connection/database');
var firebase = require('../connection/auth');
var fireAuth = firebase.auth();

router.get('/', function (req, res) {
    console.log(firebase.auth());
    res.render('signup', { title: '註冊', error: req.flash('error')});
})

router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.passwd;
    var nickname = req.body.nickname;
    fireAuth.createUserWithEmailAndPassword(email, password)
        .then(function(user){
            var saveData={
                'email' : email,
                'password': password,
                'uid' : user.uid
            }
        firebaseDB.ref('/user'+user.uid).set(saveData);
        res.redirect('/signup/success');
        })

        .catch(function(error){
            console.log('fuckyou');
            var errorMessage = error.message;
            req.flash('error',errorMessage);
            res.redirect('/signup');
        })
})
router.get('/success',function(req,res){
    res.render('success',{
        title:'註冊成功'
    });
})
module.exports = router;