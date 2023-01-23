const DatabaseManagerModule = require('./databaseManager.js');
const DatabaseManager = new DatabaseManagerModule();
const { Sequelize, DataTypes, Model } = require('sequelize');

const { Muscle } = require('../../models/muscle.model.js');
const { User } = require('../../models/user.model.js');
const { Exercise } = require('../../models/exercise.model.js');
const { SessionGroup } = require('../../models/session_group.model.js');
const { Session } = require('../../models/session.model.js');
const { ExerciseSession } = require('../../models/exercice_session.model.js');
const { DateSession } = require('../../models/date_session.model.js');
const { DateExerciseSession } = require('../../models/date_exercise_session.model.js')

const models = [
    Muscle, 
    User,
    Exercise,
    SessionGroup,
    Session,
    ExerciseSession,
    DateSession,
    DateExerciseSession
]

function init () {
    const sequelize = DatabaseManager.getConnection();
    sequelize.authenticate();

    for ( let model of models) {
        model.sync({ alter: false, force: false });
    }
}


module.exports = { init };