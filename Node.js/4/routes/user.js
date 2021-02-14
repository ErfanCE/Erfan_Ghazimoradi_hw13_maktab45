const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/userController.js');


// parse post body: {username: foo, password: foo}
router.use(bodyParser.urlencoded({extended: true}));

router.post('/getUser', userController.loginHandler);


module.exports = router;