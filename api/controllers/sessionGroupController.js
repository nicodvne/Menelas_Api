const { SessionGroup } = require('../models/session_group.model');
const AbstractController = require('./AbstractController');

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
}