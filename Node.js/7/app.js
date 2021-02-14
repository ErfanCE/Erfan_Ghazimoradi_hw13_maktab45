const express = require('express');
const app = express();
const homeRoute = require('./routes/homeRoute.js');
const aboutRoute = require('./routes/aboutRoute.js');
const contactRoute = require('./routes/contactRoute.js');
const phonesRoute = require('./routes/phonesRoute.js');
const phonePages = require('./routes/phonePages.js');

app.use(express.static('public', {extensions: false}));

app.use('/', homeRoute);

app.use('/', aboutRoute);

app.use('/', contactRoute);

app.use('/pages', phonePages);

app.use('/', phonesRoute);

// 404: page not found
app.use((requset, response) => {
    response.status(404).send('<pre style="color: red">404: <b>Page not Found!</b></pre>');
});

app.listen(8000, () => {
    console.log('server is running on :8000 ...');
});