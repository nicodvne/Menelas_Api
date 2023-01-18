const express = require('express');
const router = express.Router();

const SessionGroupControllerModule = require('../controllers/sessionGroupController.js');
const SessionGroupController = new SessionGroupControllerModule;

router.get('/getAll', async (req, res) => SessionGroupController.getAllSessionGroup(req, res));

router.post('/getByUserId', async (req, res) => SessionGroupController.getSessionGroupByUserId(req, res));

module.exports = router;