const { Muscle } = require('../models/muscle.model.js');

module.exports = class MuscleControllerModule {
    constructor(){}

    async getAllMuscles(req, res) {
        try {
            const allMuscles = await Muscle.findAll();

            if (!allMuscles) {
                return res.status(204).json()
            }

            return res.status(200).json(allMuscles);
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }
}
