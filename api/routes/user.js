const express = require('express');
const DatabaseManagerModule = require('../services/database/databaseManager');
const DatabaseManager = new DatabaseManagerModule();
const router = express.Router();

const sequelize = DatabaseManager.getConnection();
const { User } = require('../models/user.model.js');

router.get('/getAll', async (_, res) => {
    const result = await User.findAll();

    res.status(200).json(result);
})

module.exports = router;
