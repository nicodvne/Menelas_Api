const { Exercise } = require('../models/exercise.model');
const AbstractController = require('./AbstractController');

const tools = require("../services/tools.js");

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

    async createExercise(req, res) {
        if (
            !req.body.name || !tools.isDatabaseId(req.body.userId) || !tools.isDatabaseId(req.body.muscleId) || req.body.userId <=1
        ){
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = { name: req.body.name, id_user: req.body.userId };
        const elementContent = {
            name: req.body.name,
            description: req.body.description != "" ? req.body.description : null,
            image_url: req.body.image_url != "" ? req.body.image_url : null,
            id_user: req.body.userId,
            id_muscle: req.body.muscleId
        }

        return this.createModel(res, whereCondition, elementContent, Exercise)

    }    

    async deleteExercise(req, res) {
        if (
            !tools.isDatabaseId(req.body.exerciseId) || !tools.isDatabaseId(req.body.userId) || req.body.userId <=1
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = { id: req.body.exerciseId, id_user: req.body.userId } 

        return this.deleteModel(res, whereCondition, Exercise);
    }
    
}
