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

    /**
     * 
     * @param {*} res 
     * @param {*} whereCondition 
     * @param {*} elementContent 
     * @param {Model} Model 
     * @returns 
     */
    async createModel(res, whereCondition, elementContent, Model) {
        try {
            return Model.findOne({ where: whereCondition })
            .then((obj) => {
                    if (obj) {
                        return res.status(401).json({"message": "impossible de créer un exercice déja existant"})
                    }

                    let model = Model.create(elementContent);

                    return res.status(201).json({'message': 'Element added'})
                })
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

    /**
     * 
     * @param {*} res 
     * @param {object} whereCondition 
     * @param {Model} Model 
     * @returns 
     */
    async deleteModel(res, whereCondition, Model) {
        try {
            Model.destroy({where: whereCondition})
                .then((obj) => {
                    if (obj) {
                        return res.status(200).json({"message": "Element supprimé"});
                    }

                    return res.status(401).json({"message": "impossible de supprimer un élément inexistant"}) 
                })
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }
}