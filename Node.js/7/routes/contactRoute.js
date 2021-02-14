const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/contact', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});


module.exports = router;