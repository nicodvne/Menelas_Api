const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');


const sequelize = DatabaseManager.getConnection();

class Muscle extends Model {}

    Muscle.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    description: {
        type: DataTypes.STRING
        // allowNull defaults to true
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
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Muscle' // We need to choose the model name
    }
);

module.exports = { Muscle }
