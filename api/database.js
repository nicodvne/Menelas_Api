const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'zyzz',
    password: 'zyzz',
    database: 'menelas',
    connectionLimit: 5
})

// Connect and check for errors
pool.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if(connection) connection.release();

    return;
});

module.exports = pool;