const express = require('express');
const router = express.Router();
const path = require('path');


router.use(express.static('public', {extensions: false}));

router.use('/:phone', (request, response) => {
    const {phone} = request.params;

    response.sendFile(path.join(__dirname, '../', 'views', 'pages', `${phone}.html`));
});


module.exports = router;