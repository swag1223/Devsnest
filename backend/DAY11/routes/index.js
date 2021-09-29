var express = require('express');
var router = express.Router();

var initialRegisterChecks = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  sess.username = 'username';
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  console.log('Redis value', req.session.username);
  res.sendStatus(200);
})

router.post('/register', initialRegisterChecks , register);


module.exports = router;
