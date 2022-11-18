const express = require('express');
const StubControllerModule = require('../controllers/stubController');
const router = express.Router();
const stubController = new StubControllerModule();

router.get('/', (req, res) => stubController.homepageAction(req, res))

router.get('/allMuscles', (req, res) => stubController.getAllMusclesAction(req, res));

module.exports = router;