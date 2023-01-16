const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = DatabaseManager.getConnection();

class User extends Model {}

    User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    phoneNumber: {
        type: DataTypes.STRING
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
    modelName: 'User' // We need to choose the model name
    }
);

module.exports = { User }