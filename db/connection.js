const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pms'
});


con.connect(function(err) {
    if (err) throw err;
    console.log('connection successful');
    });
      
    

module.exports = con;
