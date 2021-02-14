const { response } = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/:id', (request, response) => {
    const {id} = request.params;

    response.sendFile(path.join(__dirname, '../', 'views', 'pages', `index${id}.html`));
});


module.exports = router;