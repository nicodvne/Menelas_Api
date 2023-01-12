const express = require('express');
const router = express.Router();
const pool = require('../services/database/databaseManager');

router.get('/:id', async function(req,res){
    try{
        const sqlQuery = 'SELECT * FROM user WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    }catch{
        res.status(400).send(error.message);
    }
})

module.exports = router;