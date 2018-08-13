var express = require('express');
var router = express.Router();
var firebase = require('../connection/auth');


router.get('/', function (req, res, next) {
    
    console.log(firebase.auth());

    res.render('albums', {
        title: '六角學院留言板'
    });
});
/* GET home page. */
module.exports = router;