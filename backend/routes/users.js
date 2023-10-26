/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into /api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect'); // install and configure express-openid-connect
const axios = require('axios');
//const userQueries = require('../db/queries/users');--not needed since using auth0

// // // Route to get a list of all users
// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// Route for user registration
router.post('/register', (req, res) => {
  const { username, password } = req.body; // send username and password in the request body

  // Make a POST request to the Auth0 Signup API
  axios.post(`https://YOUR_AUTH0_DOMAIN/dbconnections/signup`, {
    client_id: 'YOUR_AUTH0_CLIENT_ID',
    email: username,
    password,
    connection: 'Username-Password-Authentication' // Update with your Auth0 connection name
  })
    .then(response => {
      res.json({ message: 'User registered successfully', user: response.data });
    })
    .catch(error => {
      res.status(500).json({ error: error.response.data.description });
    });
});

// Route for user login
router.post('/login', (req, res) => {
  const { username, password } = req.body; // username and password in the request body

  // Make a POST request to the Auth0 API
  axios.post(`https://YOUR_AUTH0_DOMAIN/oauth/token`, {
    grant_type: 'password',
    username,
    password,
    audience: 'YOUR_API_IDENTIFIER', // Update with your Auth0 API Identifier
    client_id: 'YOUR_AUTH0_CLIENT_ID',
    client_secret: 'YOUR_AUTH0_CLIENT_SECRET'
  })
    .then(response => {
      res.json({ message: 'Login successful', access_token: response.data.access_token });
    })
    .catch(error => {
      res.status(401).json({ error: 'Invalid credentials' });
    });
});

// Route for user logout
router.get('/logout', requiresAuth(), (req, res) => {
  // Use the requiresAuth() middleware to protect the logout route

  // Redirect to the Auth0 logout URL
  const logoutURL = `https://YOUR_AUTH0_DOMAIN/v2/logout?client_id=YOUR_AUTH0_CLIENT_ID&returnTo=YOUR_APP_URL`;

  res.redirect(logoutURL);
});

module.exports = router;




