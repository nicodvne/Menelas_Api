const express = require('express');
const router = express.Router();

const ExerciseSessionControllerModule = require('../controllers/exerciseSessionController.js');
const ExerciceSessionController = new ExerciseSessionControllerModule;

router.get('/getAll', async (req, res) => ExerciceSessionController.getAllExerciseSession(req, res));

router.post('/getByExerciseId', async (req, res) => ExerciceSessionController.getExerciseSessionByExerciseId(req, res));

router.post('/getBySessionId', async (req, res) => ExerciceSessionController.getExerciseSessionBySessionId(req, res));

router.post('/delete', async (req, res) => ExerciceSessionController.deleteExerciseSession(req, res));

router.post('/create', async (req, res) => ExerciceSessionController.createExerciseSession(req, res));


module.exports = router;