const { SessionGroup } = require('../models/session_group.model');
const AbstractController = require('./AbstractController');

const tools = require("../services/tools.js");

module.exports = class SessionGroupControllerModule extends  AbstractController{
    constructor(){
        super();
    }

    async getAllSessionGroup(req, res) {
        return this.getAll(req, res, SessionGroup);
    }

    async getSessionGroupByUserId(req, res) {
        return this.getByUserId(res, req.body.userId, SessionGroup);
    }

    async createSessionGroup(req, res) {
        if (
            !req.body.name || !tools.isDatabaseId(req.body.userId) || req.body.userId <=1
        ){
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = {id: -1};
        const elementContent = {
            name: req.body.name,
            description: req.body.description != "" ? req.body.description : null,
            id_user: req.body.userId,
        }

        return this.createModel(res, whereCondition, elementContent, SessionGroup);
    }
}