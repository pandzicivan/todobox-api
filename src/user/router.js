const express = require('express');
const controller = require('./controller');
const router = express.Router({// eslint-disable-line new-cap
  mergeParams: true,
});

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags: [
 *       "User"
 *     ]
 *     summary: Login user
 *     description: Login existing user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: Users's email
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: Users's password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User logged in
 *       401:
 *         description: Unathorized
 *       400:
 *         description: General error
 */
router.post('/login', (req, res) => {
  controller.login(req, res);
});

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags: [
 *       "User"
 *     ]
 *     summary: Register new user
 *     description: Register new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: Users's first name
 *         in: body
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: Users's last name
 *         in: body
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email
 *         in: body
 *         required: true
 *         type: string
 *       - name: username
 *         description: User's username
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User registered
 *       400:
 *         description: User already exists
 */
router.post('/register', (req, res) => {
  controller.register(req, res);
});

module.exports = router;
