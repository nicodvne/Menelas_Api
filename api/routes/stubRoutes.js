const express = require('express');
const StubControllerModule = require('../controllers/stubController');
const router = express.Router();
const stubController = new StubControllerModule();

router.get('/', (req, res) => stubController.homepageAction(req, res))

// Muscles

router.get('/muscles', (req, res) => stubController.getAllMusclesAction(req, res));

router.post("/getMuscleById", (req, res) => stubController.getMuscleById(req, res));

// Exercices

router.post("/getExerciseById", (req, res) => stubController.getExerciseById(req, res))

router.post("/getUserExercises", (req, res) => stubController.getUserExercises(req, res));

router.post("/addExercise", (req, res) => stubController.createExercice(req, res));

// Groups

router.post("/getGroups", (req, res) => stubController.getSeanceGroups(req, res));

router.post("/addGroup", (req, res) => stubController.createSeanceGroupAction(req, res));

// Seance 

router.post("/createSeance", (req, res) => stubController.createSeance(req, res));

router.post("/getSeanceById", (req, res) => stubController.getSeanceByIdAction(req, res));

router.post("/getAllSeancesByUser", (req, res) => stubController.getSeanceUserByIdAction(req, res));

module.exports = router;