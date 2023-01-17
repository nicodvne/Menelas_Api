const express = require('express');
const router = express.Router();

const UserControllerModule = require('../controllers/userController');
const UserController = new UserControllerModule();

router.get('/getAll', async (req, res) => UserController.getAllUser(req, res));

router.post('/create', async (req, res) => UserController.createUser(req, res));

router.post('/getByEmail', async(req, res) => UserController.getUserByEmail(req, res));

module.exports = router;
