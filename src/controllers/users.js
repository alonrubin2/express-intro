const users = [];
let counter = 1;

class Users {

    // CREATE USER 
    static createUser(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(402).send('incorrect body');
            return;
        }
        if (username.length < 3 || password.length < 6) {
            res.status(400).send('username or password incorrect');
            return;
        }
        const newUser = {
            id: counter,
            username,
            password
        };
        counter++;
        users.push(newUser);
        res.sendStatus(201);
    }

    // FIND USER 
    static findUser(req, res) {
        const userId = parseInt(req.params.id);
        const requestedUser = users.find(user => user.id === userId)
        if (!requestedUser) {
            res.sendStatus(404);
            return;
        }
        res.send(requestedUser);
    }

    // DELETE
    static deleteUser(req, res) {
        const userId = parseInt(req.params.id);
        const requestedUser = users.find(user => user.id === userId)
        if (!requestedUser) {
            res.sendStatus(404);
            return;
        }
        else {
            let index = users.indexOf(requestedUser);
            users.splice(index, 1);
            res.send(`${requestedUser.username} deleted`)
        }
    };

    // LOGIN
    static login(req, res) {
        const { username, password } = req.body;
        const existingUser = users.find(user => user.username === username && user.password === password);
        if (!existingUser) {
            res.status(403).send('user not found');
            return;
        }
        else {
            res.sendStatus(200);
        }
    }

    //  EDIT
    static editUser(req, res) {
        const userId = parseInt(req.params.id);
        const requestedUser = users.find(user => user.id === userId)
        if (!requestedUser) {
            res.sendStatus(404);
            return;
        }
        else {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(402).send('incorrect body');
                return;
            }
            if (username.length < 3 || password.length < 6) {
                res.status(400).send('username or password incorrect');
                return;
            }
            const updatedUser = {
                id: userId,
                username,
                password
            };
            let index = users.indexOf(requestedUser);
            users.splice(index, 1, updatedUser);
            res.send(`${requestedUser.username} has been updated to ${updatedUser.username}`)
        }
    };

    // GET ALL USERS
    static getAllUsers(req, res) {
        res.send(users);
    };
}

module.exports = Users;