const { Model } = require('sequelize');

module.exports = class AbstractController {
    constructor() {}

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {Model} model 
     */
    async getAll(req, res, model) {
        try {
            const allResults = await model.findAll();

            if (!allResults) {
                return res.status(204).json();
            }

            return res.status(200).json(allResults);
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

    /**
     * 
     * @param {*} res 
     * @param {*} id 
     * @param { Model } Model 
     * @returns 
     */
    async getByUserId(res, id, Model) {
        if (!id || !Number.isInteger(id)) {
            return res.status(400).json({'message': 'Informations manquantes ou non conformes'});
        }
        
        const whereCondition = {}
        whereCondition['id_user'] = [1, id];

        try {
            const results = await Model.findAll({
                where: whereCondition
            })

            if (!results || results.length == 0) {
                return res.status(204).json();
            }

            return res.status(200).json(results);
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} id 
     * @param {*} property 
     * @param { Model } Model 
     * @returns 
     */
    async getByForeignId(res, id, property, Model) {
        if (!id || !Number.isInteger(id)) {
            return res.status(400).json({'message': 'Informations manquantes ou non conformes'});
        }
        
        const whereCondition = {}
        whereCondition[property] = id;

        try {
            const results = await Model.findAll({
                where: whereCondition
            })

            if (!results || results.length == 0) {
                return res.status(204).json();
            }

            return res.status(200).json(results);
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }
}