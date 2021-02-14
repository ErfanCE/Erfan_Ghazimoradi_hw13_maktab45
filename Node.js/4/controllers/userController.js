const fs = require('fs');
const path = require('path');
const { parse } = require('path');


exports.loginHandler = (request, response) => {
    let user = request.body;

    fs.readFile(path.join(__dirname, '../', 'public', 'json', 'users.json'), 'utf8', (err, data) => {
        if (err) return console.log(err.message);

        usersData = JSON.parse(data);

        // empty input
        if (user.username === '' || user.password === '') {
            return loginSatus('empty', response);
        }

        // username exist
        for (const targetUser of usersData) {
            if (targetUser.username === user.username) {
                let result = (targetUser.password === user.password) ? ('success') : ('notMatch');
                return loginSatus(result, response);
            }
        }

        // username not exist
        return loginSatus('notFound', response);
    });
}

// send status
function loginSatus(status, response) {
    response.send(status);
}