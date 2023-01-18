const { Exercise } = require('../models/exercise.model');
const AbstractController = require('./AbstractController');

module.exports = class ExerciseControllerModule extends  AbstractController{
    constructor(){
        super();
    }

    async getAllExercise(req, res) {
        return this.getAll(req, res, Exercise);
    }

    async getExerciceByUser(req, res) {
        return this.getById(res, req.body.userId, 'id_user', Exercise);
    }


    async getExerciceByMuscle(req, res) {
        return this.getById(res, req.body.muscleId, 'id_muscle', Exercise);
    }

    
}