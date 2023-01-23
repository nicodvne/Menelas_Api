const { DateSession } = require('../models/date_session.model');
const AbstractController = require('./AbstractController');

const tools = require("../services/tools.js");

module.exports = class DateSessionControllerModule extends AbstractController{
    constructor(){
        super();
    }

    async getAllDateSession(req, res) {
        return this.getAll(req, res, DateSession);
    }

    async getDateSessionBySession(req, res) {
        return this.getByForeignId(res, req.body.sessionId, 'id_session', DateSession);
    }

    async createDateSession(req, res) {
        if (!tools.isDatabaseId(req.body.sessionId) || !req.body.start_date || !req.body.end_date) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        // Fake condition to avoid findOne
        const whereCondition = {id: -1};

        const elementContent = {
            start_date: req.body.start_date ? new Date(req.body.start_date) : null,
            end_date: req.body.end_date ? new Date(req.body.end_date) : null,
            id_session: req.body.sessionId
        }

        return this.createModel(res, whereCondition, elementContent, DateSession);
    }

    async deleteDateSession(req, res) {
        if (!tools.isDatabaseId(req.body.dateSessionId)) {
            return res.status(400).json({'message': 'Informations manquantes ou incorrectes'});
        }

        const whereCondition = { id: req.body.dateSessionId }

        return this.deleteModel(res, whereCondition, DateSession);       
    }
}
