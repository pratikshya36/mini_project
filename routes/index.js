

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var bcrypt = require('bcryptjs');
var models  = require(path.join(__dirname, '/../' ,'models'));
var Users = models.Users;

router.use(session({secret: 'ssshhhhh'}));
router.use(bodyParser.urlencoded({extended: false }));

/* GET home page. */
router.get('/',function(req,res,next){
	res.render('index',{msg:'HII'});
});

router.post('/addUser', function(req, res, next) {
	var salt=bcrypt.genSaltSync(1);
	var hash=bcrypt.hashSync(req.body.password,salt);
  var newUser = {
   userName: req.body.name,
    password: hash
  };
 res.send(JSON.stringify({msg:"You have registered"}));
 return Users.create(newUser);
});
module.exports = router;

