
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');


const config =  require('./config')

const api = require(path.join(__dirname, 'services', 'api'))
const getCharacters = require(path.join(__dirname, 'services', 'getCharacters'))

const database = require(path.join(__dirname, 'tools', 'database'));


const app = express()

app.use(bodyParser.urlencoded({extended: false}));

// serving the front, as you can see it's pretty simple
app.get('/', (req, res, next) => {res.end('hello, browse to /api to run the api')})

// here you have every endpoint for all the apis
app.get('/api', api)
app.get('/get/characters', getCharacters)

http.createServer(app).listen(config.server.port, () => {
    console.log('server started')
})
