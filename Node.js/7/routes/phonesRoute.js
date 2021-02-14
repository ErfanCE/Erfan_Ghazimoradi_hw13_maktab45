const express = require('express');
const router = express.Router();
const phonesData = require('../public/json/phones.json');


router.get('/getPhones', (request, response) => {
    response.send(phonesData);
});


module.exports = router;