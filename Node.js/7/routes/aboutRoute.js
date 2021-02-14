const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
});


module.exports = router;