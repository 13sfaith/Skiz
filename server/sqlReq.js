
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3383399',
    password: 'Y55bvUuNDZ',
    database: 'sql3383399'
})

// skis values(id, name, brand, price, length, type)
//var query = 'ALTER TABLE skis Change length skilength varchar(255);'
var query = 'SELECT * FROM skis;'

connection.query(query, (err, res, fields) => {
	if (err) console.log(err)
	else if (fields) console.log(fields)
	else console.log(res)
})
