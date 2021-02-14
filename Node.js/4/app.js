const express = require('express');
const app = express();
const path = require('path');
const adminRouter = require('./routes/admin.js');
const userRouter = require('./routes/user.js');


app.use(express.static('public', {extensions: false}));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/admin', adminRouter);

app.use('/user', userRouter);

app.use((requset, response) => {
    response.status(404).send('<pre style="color: red">404: <b>Page not Found!</b></pre>');
});


app.listen(8000, () => {
    console.log('server is running on :8000 ...');
});