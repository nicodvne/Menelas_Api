const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const sequelize = DatabaseManager.getConnection();

const { Session } = require('./session.model.js');
const { Exercise } = require('./exercise.model');

class ExerciseSession extends Model {}

    ExerciseSession.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    order_num : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    superset : {
        type: DataTypes.BOOLEAN
    },
    sets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reps: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.STRING
    },
    rest: {
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
    modelName: 'Exercise_session' // We need to choose the model name
    }
);

ExerciseSession.belongsTo(Exercise, {foreignKey: 'id_exercise'});
ExerciseSession.belongsTo(Session, {foreignKey: 'id_session'});

module.exports = { ExerciseSession }
