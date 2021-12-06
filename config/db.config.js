const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gpds'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Base de datos conectada');
})

module.exports = dbConn;