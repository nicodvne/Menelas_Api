const express = require('express');
const router = express.Router();

const SessionControllerModule = require('../controllers/sessionController.js');
const SessionController = new SessionControllerModule;

router.get('/getAll', async (req, res) => SessionController.getAllSession(req, res));

router.post('/getByUserId', async (req, res) => SessionController.getSessionByUserId(req, res));

module.exports = router;