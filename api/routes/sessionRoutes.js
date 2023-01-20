const express = require('express');
const router = express.Router();

const SessionControllerModule = require('../controllers/sessionController.js');
const SessionController = new SessionControllerModule;

router.get('/getAll', async (req, res) => SessionController.getAllSessionGroup(req, res));

router.post('/getByUserId', async (req, res) => SessionController.getSessionGroupByUserId(req, res));

module.exports = router;