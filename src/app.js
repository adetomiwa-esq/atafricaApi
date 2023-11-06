const express = require('express')

const app = express()

app.use(express.json())

const stockRoute = require('./routes/stockRoute')


app.use('/api/v1', stockRoute)

module.exports = app