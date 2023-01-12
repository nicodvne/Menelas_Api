'use strict';

const { Sequelize } = require('sequelize');

module.exports = class DatabaseManagerModule {
    constructor() {}

    getConnection() {
        return new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, 
            {dialect: "mysql",host: process.env.HOST}
        );
    }
}