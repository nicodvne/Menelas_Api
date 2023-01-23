const AbstractController = require('./AbstractController');
const { DateExerciseSession } = require('../models/date_exercise_session.model.js')

const tools = require("../services/tools.js");

module.exports = class DateExerciseSessionControllerModule extends AbstractController{
    constructor(){
        super();
    }

    async getAllDateExerciseSession(req, res) {
        return this.getAll(req, res, DateExerciseSession);
    }

    async getDateExerciseSessionByExerciseSessionId(req, res) {
        return this.getByForeignId(res, req.body.exerciseSessionId, 'id_exercise_session', DateExerciseSession);
    }

    async getDateExerciseSessionByDateSessionId(req, res) {
        return this.getByForeignId(res, req.body.dateSessionId, 'id_date_session', DateExerciseSession);
    }

    async deleteDateExerciseSession(req, res) {
        if (!tools.isDatabaseId(req.body.dateExerciseSessionId)) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = { id: req.body.dateExerciseSessionId }

        return this.deleteModel(res, whereCondition, DateExerciseSession);   
    }

    async createDateExerciseSession(req ,res) {
        if (
            !tools.isDatabaseId(req.body.dateSessionId) || 
            !req.body.sets || 
            !tools.isDatabaseId(req.body.exerciseSessionId)
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        // Fake condition to avoid findOne to create element
        const whereCondition = {id: -1};

        const elementContent = {
            sets: req.body.sets,
            reps: req.body.reps,
            weight: req.body.weight,
            rest: req.body.rest,
            id_date_session: req.body.dateSessionId,
            id_exercise_session: req.body.exerciseSessionId
        }

        return this.createModel(res, whereCondition, elementContent, DateExerciseSession);
    }
}
