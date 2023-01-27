const { ExerciseSession } = require('../models/exercice_session.model.js');
const AbstractController = require('./AbstractController.js');

const tools = require("../services/tools.js");

module.exports = class ExerciseSessionControllerModule extends AbstractController{
    constructor(){
        super();
    }

    async getAllExerciseSession(req, res) {
        return this.getAll(req, res, ExerciseSession);
    }

    async getExerciseSessionByExerciseId(req, res) {
        return this.getByForeignId(res, req.body.exerciseId, 'id_exercise', ExerciseSession);
    }

    async getExerciseSessionBySessionId(req, res) {
        return this.getByForeignId(res, req.body.sessionId, 'id_session', ExerciseSession);
    }

    async deleteExerciseSession(req, res) {
        if (
            !tools.isDatabaseId(req.body.exerciseSessionId)
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = { id: req.body.exerciseSessionId } 

        return this.deleteModel(res, whereCondition, ExerciseSession);
    }

    async createExerciseSession(req ,res) {
        if (
            !tools.isDatabaseId(req.body.sessionId) || 
            !req.body.sets ||
            !req.body.order ||
            !tools.isDatabaseId(req.body.exerciseId)
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        // Fake condition to avoid findOne to create element
        const whereCondition = {id: -1};

        const elementContent = {
            order: req.body.order,
            superset: req.body.superset || false,
            sets: req.body.sets,
            reps: req.body.reps,
            weight: req.body.weight,
            rest: req.body.rest,
            id_session: req.body.sessionId,
            id_exercise: req.body.exerciseId
        }

        return this.createModel(res, whereCondition, elementContent, ExerciseSession);
    }
}
