const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const { Session } = require('./session.model.js');

const sequelize = DatabaseManager.getConnection();

class DateSession extends Model {}

    DateSession.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Date_session' // We need to choose the model name
    }
);

DateSession.belongsTo(Session, {foreignKey: 'id_session'})

module.exports = { DateSession }