const express = require('express');
const StubControllerModule = require('../controllers/stubController');
const router = express.Router();
const stubController = new StubControllerModule();

router.get('/', (req, res) => stubController.homepageAction(req, res))

router.get('/muscles', (req, res) => stubController.getAllMusclesAction(req, res));

router.post("/getMuscleById", (req, res) => stubController.getMuscleById(req, res));

router.post("/getExerciseById", (req, res) => stubController.getExerciseById(req, res))

router.post("/getUserExercises", (req, res) => stubController.getUserExercises(req, res));

router.post("/addExercise", (req, res) => stubController.createExercice(req, res));

module.exports = router;