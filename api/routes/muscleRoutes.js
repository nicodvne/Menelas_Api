const express = require('express');
const router = express.Router();

const MuscleControllerModule = require('../controllers/muscleController.js');
const MuscleController = new MuscleControllerModule();

router.get('/getAll', async (req, res) => MuscleController.getAllMuscles(req, res));

module.exports = router;