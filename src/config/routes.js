const express = require('express');
const routes = express.Router();
const Users = require('../controllers/users');
const Photos = require('../controllers/photos')


// CREATE user
routes.put('/user', Users.createUser);

// Login
routes.get('/user/login', Users.login);

// GET All users
routes.get('/user', Users.getAllUsers);

// Delete user
routes.delete('/user/:id', Users.deleteUser);

// Find Specific user
routes.get('/user/:id', Users.findUser);

// Edit user
routes.post('/user/:id', Users.editUser);



// CREATE photo
routes.put('/photo', Photos.createPhoto);

// GET All photos
routes.get('/photo', Photos.getAllPhotos);

// Delete photo
routes.delete('/photo/:id', Photos.deletePhoto);

// Find Specific photo
routes.get('/photo/:id', Photos.findPhoto);

// Edit photo
routes.post('/photo/:id', Photos.updatePhoto);

module.exports = routes;