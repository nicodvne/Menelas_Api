const tools = require("../services/tools.js");
const { ExerciseSession } = require('../models/exercice_session.model.js');
const { DateExerciseSession } = require('../models/date_exercise_session.model.js')
const { Exercise } = require('../models/exercise.model');
const { Muscle } = require('../models/muscle.model.js');
const { DateSession } = require('../models/date_session.model');
const { Session } = require('../models/session.model');
const { SessionGroup } = require('../models/session_group.model');
const { User } = require('../models/user.model.js');


module.exports = class DispatchController {
    constructor() {

    }

    getModel(tableName) {
        let matchModels = {
            'exercises': Exercise,
            'exercise_session': ExerciseSession,
            'muscles': Muscle,
            'date_exercise_sessions': DateExerciseSession,
            'date_sessions': DateSession,
            'sessions': Session,
            'session_groups': SessionGroup,
            'users': User
        };

        return matchModels[tableName];
    }

    async createElement(req, res) {
        if (
            !req.body.tableName ||
            !req.body.data ||
            'object' != typeof req.body.data
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const model = this.getModel(req.body.tableName);
        if (!model) {
            return res.status(404).json({'message': 'table introuvable'});
        }

        try {
            model.create(req.body.data);
            
            return res.status(200).json({'message': 'ok'});

        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

    async deleteElement(req, res) {
        if (
            !req.body.tableName ||
            !req.body.id_row
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const model = this.getModel(req.body.tableName);
        if (!model) {
            return res.status(404).json({'message': 'table introuvable'});
        }

        try {
            model.findOne({
                where: {
                    id: req.body.id_row
                }
            }).then((obj) => {
                if (obj) {
                    model.destroy({
                        where: {
                            id: req.body.id_row
                        }
                    })

                    return res.status(200).json({'message': 'Element supprimé'});
                }

                return res.status(404).json({'message': 'element introuvable'});
            })
        } catch (err) {
            return res.status(500).json({'message': err.messahe});
        }
    }

    async updateElement(req, res) {
        if (
            !req.body.tableName ||
            !req.body.data ||
            !req.body.id_row ||
            'object' != typeof req.body.data
        ) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const model = this.getModel(req.body.tableName);
        if (!model) {
            return res.status(404).json({'message': 'table introuvable'});
        }

        try {
            model.findOne({
                where: {
                    id: req.body.id_row
                }
            }).then((obj) => {
                if (obj) {
                    obj.set(req.body.data);
                    obj.save();
                    
                    return res.status(200).json({'message': 'Element mis à jour'});
                }

                return res.status(404).json({'message': 'Element introuvable'});
            })
        } catch (err) {
            return res.status(500).json({'message': err.messahe});
        }

    }

}
