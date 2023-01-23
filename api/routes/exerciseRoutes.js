const express = require('express');
const router = express.Router();

const ExerciseControllerModule = require('../controllers/exerciceController');
const ExerciceController = new ExerciseControllerModule;

router.get('/getAll', async (req, res) => ExerciceController.getAllExercise(req, res));

router.post('/getByUserId', async (req, res) => ExerciceController.getExerciceByUser(req, res));

router.post('/getByMuscleId', async (req, res) => ExerciceController.getExerciceByMuscle(req, res));

router.post('/create', async (req, res) => ExerciceController.createExercise(req, res));

router.post('/delete', async (req, res) => ExerciceController.deleteExercise(req, res));

module.exports = router;