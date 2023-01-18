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
        return this.getByUserId(res, req.body.userId, Exercise);
    }


    async getExerciceByMuscle(req, res) {
        return this.getByForeignId(res, req.body.muscleId, 'id_muscle', Exercise);
    }

    
}