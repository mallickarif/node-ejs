var express = require('express');
var router = express.Router();
const userController = require("../controller/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Home', userController.userList);


module.exports = router;
