const DatabaseManagerModule = require('./databaseManager.js');
const DatabaseManager = new DatabaseManagerModule();

function init () {
    const sequelize = DatabaseManager.getConnection();
    sequelize.authenticate();
}

module.exports = { init };