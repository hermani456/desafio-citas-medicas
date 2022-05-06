const http = require('http')
const chalk = require('chalk')
const _ = require('lodash')
const {getInfo, users} = require('./getinfo')

const port = 8080

http
	.createServer(async (req, res) => {
		if (req.url.includes('/users')) {
			const users = await getInfo()
			_.forEach(users, (user, i) => {
				const userData = `${i + 1}. Nombre: ${user.name} Apellido: ${
					user.lastName
				} ID: ${user.id} Fecha: ${user.date} \n`
				res.write(`<meta charset="UTF-8"><h3>${userData}</h3>`)
				console.log(chalk.blue.bgWhite.bold(userData))
			})
			res.end()
		}
	})
	.listen(port, () => console.log(`listening on port ${port}`))
