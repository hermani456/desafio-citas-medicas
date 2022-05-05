const http = require('http')
const chalk = require('chalk')
const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const getData = require('./getdata')
const _ = require('lodash')

const users = []
const port = 8080

;(async () => {
	const data = await getData()
	for (const user of data) {
		const name = user.name.first
		const lastName = user.name.last
		const id = uuidv4().slice(0, 6)
		const date = moment().format('MMM Do YYYY hh:mm:ss')
		users.push({ name, lastName, id, date })
	}
})()
http
.createServer((req, res) => {
	if (req.url.includes('/users')) {
		_.forEach(users,(user, i)=>{        
				const userData = `${i + 1}. Nombre: ${user.name} Apellido: ${user.lastName} ID: ${user.id} Fecha: ${user.date} \n`
            res.write(`<h3>${userData}</h3>`);
				console.log(chalk.blue.bgWhite.bold(`${userData}`))
			})
			res.end()
		}
	})
	.listen(port, () => console.log(`listening on port ${port}`))
