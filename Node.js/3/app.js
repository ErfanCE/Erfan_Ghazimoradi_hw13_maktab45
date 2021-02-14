const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');

// root
app.get('/', (request, response) => {
    response.send('<pre>Available Route: <a href="/user">/user</a></pre>');
});

// user route
app.use('/user', userRoute);

// 404: page not found
app.use((requset, response) => {
    response.status(404).send('<pre style="color: red">404: <b>Page not Found!</b></pre>');
});


app.listen(8000, () => {
    console.log('server is running on :8000 ...');
});