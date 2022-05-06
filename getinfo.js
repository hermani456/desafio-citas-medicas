const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const getData = require('./getdata')

const users = []

const getInfo = async () => {
	const data = await getData()
	for (const user of data) {
		const name = user.name.first
		const lastName = user.name.last
		const id = uuidv4().slice(0, 6)
		const date = moment().format('MMM Do YYYY hh:mm:ss')
		users.push({ name, lastName, id, date })
	}
	return users
}

module.exports = { users, getInfo }
