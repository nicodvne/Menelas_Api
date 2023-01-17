const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const { User } = require('./user.model.js');
const { SessionGroup } = require('./session_group.model.js');

const sequelize = DatabaseManager.getConnection();

class Session extends Model {}

    Session.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW')
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Session' // We need to choose the model name
    }
);

Session.belongsTo(User, {foreignKey: 'id_user'});
Session.belongsTo(SessionGroup, {foreignKey: 'id_seance_group'});

module.exports = { Session }