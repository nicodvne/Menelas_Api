const { User } = require('../models/user.model.js');

module.exports = class UserControllerModule {
    constructor(){}

    async getAllUser(req, res) {
        try {
            const result = await User.findAll();

            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).status({'message': err.message});
        }
        
    }

    async createUser(req, res) {
        if (!req.body.mail || !req.body.lastname || !req.body.firstname) {
            return res.status(400).json({'message': 'Informations manquantes'});
        }
    
        try {
            const newUser = await User.create({
                mail: req.body.mail,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                height: req.body.height,
                weight: req.body.weight,
                phoneNumber: req.body.phoneNumber
            });
    
            return res.status(200).json(newUser.toJSON());
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

    async getUserByEmail(req, res) {
        if (!req.body.mail) {
            return res.status(400).json({'message': 'Email manquant'});
        }

        try {
            const targetUser = await User.findOne({
                limit: 1,
                where: {"mail": req.body.mail}
            });

            if (targetUser) {
                return res.status(200).json({targetUser});
            }

            return res.status(204).json();
        } catch (err) {
            return res.status(500).json({'message': err.message});
        }
    }

}