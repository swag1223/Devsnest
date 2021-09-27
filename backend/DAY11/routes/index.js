var express = require('express');
var router = express.Router();

var initialRegisterChecks = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', initialRegisterChecks , register);


module.exports = router;
