const { Session } = require('../models/session.model');
const AbstractController = require('./AbstractController');

const tools = require("../services/tools.js");

module.exports = class SessionControllerModule extends  AbstractController{
    constructor(){
        super();
    }

    async getAllSession(req, res) {
        return this.getAll(req, res, Session);
    }

    async getSessionByUserId(req, res) {
        return this.getByUserId(res, req.body.userId, Session);
    }

    async createSession(req, res) {
        if (
            !req.body.name || !tools.isDatabaseId(req.body.userId) || !tools.isDatabaseId(req.body.id_session_group) || req.body.userId <=1
        ){
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = {id: -1};
        const elementContent = {
            name: req.body.name,
            notes: req.body.notes != "" ? req.body.notes : null,
            id_user: req.body.userId,
            id_session_group: req.body.id_session_group
        }

        return this.createModel(res, whereCondition, elementContent, Session);
    }
}