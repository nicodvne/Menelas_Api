const { Session } = require('../models/session.model');
const AbstractController = require('./AbstractController');

module.exports = class SessionControllerModule extends  AbstractController{
    constructor(){
        super();
    }

    async getAllSession(req, res) {
        return this.getAll(req, res, SessionGroup);
    }

    async getSessionByUserId(req, res) {
        return this.getByUserId(res, req.body.userId, SessionGroup);
    }
}