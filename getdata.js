const axios = require('axios')

const url = 'https://randomuser.me/api'

const getData = async () => {
	console.log('fetching data...')
	const { data } = await axios.get(url)
	return data.results
}

module.exports = getData
