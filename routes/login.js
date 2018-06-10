var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var session = require('express-session');

var models  = require(path.join(__dirname, '/../' ,'models'));
var Users = models.Users;

router.use(session({secret: 'ssshhhhh'}));
router.use(bodyParser.urlencoded({extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login',{msg: 'Please enter in your details'});
});

router.post('/userLogin', function(req, res, next) {
	Users.findOne( { where: { userName: req.body.name } } )
	.then(function (user) {
		// Compare password and see if itt is levelOne admin
		if (bcrypt.compareSync(req.body.password, user.password) ) {
			res.render('login',{msg:'Welcome'});
			// Render admin panel for level one admin
			
						}
		 
		// check if the person logging in leveltwo admin and display the level two admin panel
		// if login credentials are incorrect
		else {
			// Render login page 
			res.render('login', { msg: 'Wrong Password' });
		}
	}).catch(function (err) {
		console.log(err);
		res.render('login', { msg: 'Username not found' });
	});
});

module.exports = router;
