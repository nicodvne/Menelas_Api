const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const { DataTypes, Model } = require('sequelize');

const { DateSession } = require('./date_session.model');
const { ExerciseSession } = require('./exercice_session.model');

const sequelize = DatabaseManager.getConnection();

class DateExerciseSession extends Model {}

    DateExerciseSession.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    modelName: 'Date_exercise_session' // We need to choose the model name
    }
);

DateExerciseSession.belongsTo(DateSession, {foreignKey: 'id_date_session'});
DateExerciseSession.belongsTo(ExerciseSession, {foreignKey: 'id_exercise_session'});

module.exports = { DateExerciseSession }