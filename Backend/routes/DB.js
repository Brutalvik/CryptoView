const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cryptoview'
})

db.connect( err => {
    if (err) throw err
    console.log('DB Connected Successfully')
})


module.exports = db;