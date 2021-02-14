const express = require('express');
const app = express();
const path = require('path');

// handle public files
app.use(express.static('public', {extensions: false}));

// root
app.get('/', (request, response) => {
    response.send('<pre>Available Route: <a href="/login">/login</a></pre>');
});

// login
app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404: page not found
app.use((requset, response) => {
    response.status(404).send('<pre style="color: red">404: <b>Page not Found!</b></pre>');
});


app.listen(8000, () => {
    console.log('server is running on :8000 ...');
});