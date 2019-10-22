const axios = require('axios')

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
app.use(helmet())
app.use(cors())

app.get('*', async (req, res) => {
  const response = await axios
    .get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(({data}) => {
      return data
    })

  res.send({
    ...response,
  })
})

module.exports = app
