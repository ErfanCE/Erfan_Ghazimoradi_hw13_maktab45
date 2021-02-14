const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/index1', (request, response) => {
    response.sendFile(path.join(__dirname, '../' , 'views', 'pages', 'index1.html'));
});

router.get('/index2', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'pages', 'index2.html'));
});

router.get('/index3', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'pages', 'index3.html'));
});

router.get('/index4', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'pages', 'index4.html'));
});

router.get('/index5', (request, response) => {
    response.sendFile(path.join(__dirname, '../', 'views', 'pages', 'index5.html'));
});


module.exports = router;