require('custom-env').env('dev')

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.static('public'))

function getConnect()
{
	var connection = mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DB
	})

	return connection
}

/*
connection.connect(function(err) {
	if (err) throw err
	console.log('Connected to mysql database')
})
*/

app.get('/api/browse', (req, res) => {
	connection = getConnect()

	connection.query('SELECT * FROM skis;', (err, results, fields) => {
		if (err) console.log(err)
		else res.send(results)
	})

	connection.end()
})

app.get('/api/browse/:type', (req, res, next) => {
	connection = getConnect()

	var type = req.params.type

	connection.query('SELECT * FROM skis where type = ?;', [type], (err, results, fields) => {
        if (err) console.log(err)
        else res.send(results)
    })

	connection.end()
})

app.get('/api/product/:type/:name', (req, res, next) => {
	connection = getConnect()

	connection.query('SELECT * FROM skis where type = ? AND name = ?;', [req.params.type, req.params.name], (err, results, fields) => {
		if (err) console.log(err)
		else res.send(results)
	})

	connection.end()
})

app.listen(port, () => {
	console.log(`App is listenting at http://localhost:${port}`)
})

