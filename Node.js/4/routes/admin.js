const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/getAllUser', (request, response) => {
    fs.readFile(path.join(__dirname, '../', 'public', 'json', 'users.json'), 'utf8', (err, userData) => {
        if (err) return console.log(err.message);

        userData = JSON.parse(userData);
        response.send(userData);
    });
});


module.exports = router;