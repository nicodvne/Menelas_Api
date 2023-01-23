const express = require('express');
const router = express.Router();

const DateExerciseSessionControllerModule  = require('../controllers/dateExerciceSessionController.js');
const DateExerciseSessionController = new DateExerciseSessionControllerModule;

router.get('/getAll', async (req, res) => DateExerciseSessionController.getAllDateExerciseSession(req, res));

router.post('/getByExerciseSessionId', async (req, res) => 
    DateExerciseSessionController.getDateExerciseSessionByExerciseSessionId(req, res));

router.post('/getByDateSessionId', async (req, res) => 
    DateExerciseSessionController.getDateExerciseSessionByDateSessionId(req, res));

router.post('/create', async (req, res) => DateExerciseSessionController.createDateExerciseSession(req, res));

router.post('/delete', async (req, res) => DateExerciseSessionController.deleteExerciseSession(req, res));

module.exports = router;