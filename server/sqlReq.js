require('custom-env').env('dev')
const mysql = require('mysql')

var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DB
})

// skis values(id, name, brand, price, length, type)
//var query = 'ALTER TABLE skis Change length skilength varchar(255);'
var query = 'SELECT * FROM skis;'

connection.query(query, (err, res, fields) => {
	if (err) console.log(err)
	else if (fields) console.log(fields)
	else console.log(res)
})
