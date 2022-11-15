'use strict';

const stubFakeDatas = require("../services/stubFakeDatas");
const fakeDatas = new stubFakeDatas();

const tools = require("../services/tools.js");


module.exports = class StubController {
    constructor () {
    }

    homepageAction(_, res) {
        return res.status(200).json({"message": "stub api homepage"});
    }

    getAllMusclesAction(_, res) {
        return res.status(200).json(fakeDatas.getAllMuscles());
    }

    getMuscleById(req, res) {
        let muscleId = req.body.muscleId;
        if (!tools.isDatabaseId(muscleId)) {
            return res.status(500).json({"message": "c'est pété mon reuf"});
        }
        
        return res.status(200).json(fakeDatas.getMuscleById(muscleId))
    }

    getExerciseById(req, res) {
        // TODO pour la vraie API : vérifier que l'utilisateur a bien accès a l'exo ( avec l'user id )
        let exerciseId = req.body.exerciseId;
        if (!tools.isDatabaseId(exerciseId)) {
            return res.status(500).json({"message": "c'est pété mon reuf"});
        }

        return res.status(200).json(fakeDatas.getExerciseById(exerciseId));
    }

    getUserExercises(req, res) {
        let userId = req.body.userId;

        if (!tools.isDatabaseId(userId)) {
            return res.status(500).json({"message": "c'est pété mon reuf"});
        }

        // UserId = admin user
        if (userId == 1) {
            return res.status(403).json({});
        }

        return res.status(200).json(fakeDatas.getUserExercises(userId));
    } 

    createExercice(req, res) {
        let userId = req.body.userId
        let muscleId = req.body.muscleId
        let nom = req.body.nom
        let description = req.body.description
        let urlImage = req.body.urlImage

        if (!userId || !muscleId || !nom ) {
            res.status(500).json({"message": "Missing some informations"});
        }

        if (!tools.isDatabaseId(userId) || !tools.isDatabaseId(muscleId)) {
            res.status(500).json({"message": "DB id are not valid"});
        }

        if (nom && !(typeof description == string)) {
            res.status(500).json({"message": "nom must be a string"});
        }

        if (description && !(typeof description == string)) {
            res.status(500).json({"message": "description must be a string"});
        }

        if (urlImage && !(typeof urlImage == string)) {
            res.status(500).json({"message": "urlImage must be a string"});
        }

        res.status(200).json({"message": "exercise created"})
    }
    
}
