const express = require('express');
const router = express.Router();

// root
router.get('/', (request, response) => {
    let responseHtml = `<pre>Available Routes: </pre>
    <pre><a href="/user/signup">/signup</a> </pre>
    <pre><a href="/user/login">/login</a> </pre>
    <pre><a href="/user/profile">/profile</a> </pre>`;

    response.send(responseHtml);
});

router.get('/signup', (request, response) => {
    response.send('<pre>User: <b>Signup</b></pre>');
});

router.get('/login', (request, response) => {
    response.send('<pre>User: <b>Login</b></pre>');
});

router.get('/profile', (request, response) => {
    response.send('<pre>User: <b>Profile</b></pre>');
});


module.exports = router;