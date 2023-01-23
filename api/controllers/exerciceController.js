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

        try {
            return Exercise.findOne({ where: { name: req.body.name, id_user: req.body.userId } })
            .then((obj) => {
                    if (obj) {
                        return res.status(401).json({"message": "impossible de créer un exercice déja existant"})
                    }

                    Exercise.create({
                        name: req.body.name,
                        description: req.body.description != "" ? req.body.description : null,
                        image_url: req.body.image_url != "" ? req.body.image_url : null,
                        id_user: req.body.userId,
                        id_muscle: req.body.muscleId
                    })

                    return res.status(201).json({'message': 'Exercise added'})
                })
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }    

    async deleteExercise(req, res) {
        if (
            !tools.isDatabaseId(req.body.exerciseId) || !tools.isDatabaseId(req.body.userId) || req.body.userId <=1
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        try {
            Exercise.destroy({ where: {
                id: req.body.exerciseId, id_user: req.body.userId
                } 
            }).then((obj) => {
                if (!obj) {
                    return res.status(401).json({"message": "impossible de supprimer un élément inexistant"})
                }

                return res.status(200).json({"message": "Element supprimé"});

            })
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }
    
}
