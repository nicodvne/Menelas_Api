const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const { User } = require('./user.model');

const sequelize = DatabaseManager.getConnection();

class SessionGroup extends Model {}

    SessionGroup.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
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
    modelName: 'Session_group' // We need to choose the model name
    }
);

SessionGroup.belongsTo(User, {foreignKey: 'id_user'});

module.exports = { SessionGroup }