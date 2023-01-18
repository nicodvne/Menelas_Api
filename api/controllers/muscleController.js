const { Muscle } = require('../models/muscle.model.js');
const AbstractController = require('./AbstractController');

module.exports = class MuscleControllerModule extends AbstractController {
    constructor(){
        super();
    }

    async getAllMuscles(req, res) {
        return this.getAll(req, res, Muscle);
    }
}
