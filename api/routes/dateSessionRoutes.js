const express = require('express');
const router = express.Router();

const DateSessionControllerModule  = require('../controllers/dateSessionController.js');
const DateSessionController = new DateSessionControllerModule;

router.get('/getAll', async (req, res) => DateSessionController.getAllDateSession(req, res));

router.post('/getBySessionId', async (req, res) => DateSessionController.getDateSessionBySession(req, res));

router.post('/create', async (req, res) => DateSessionController.createDateSession(req, res));

module.exports = router;