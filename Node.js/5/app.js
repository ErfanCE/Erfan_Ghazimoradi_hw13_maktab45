const express = require('express');
const app = express();
const path = require('path');
const pagesRoute = require('./routes/pages.js');


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/pages', pagesRoute);

// 404: page not found
app.use((requset, response) => {
    response.status(404).send('<pre style="color: red">404: <b>Page not Found!</b></pre>');
});


app.listen(8000, () => {
    console.log('server is running on :8000 ...');
});