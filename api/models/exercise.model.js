const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const { Muscle } = require('./muscle.model');
const { User } = require('./user.model');

const sequelize = DatabaseManager.getConnection();

class Exercise extends Model {}

    Exercise.init({
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
    image_url: {
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
    modelName: 'Exercise' // We need to choose the model name
    }
);

Exercise.belongsTo(User, {foreignKey: 'id_user'});
Exercise.belongsTo(Muscle, {foreignKey: 'id_muscle'});

module.exports = { Exercise }