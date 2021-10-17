const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const postControl = require('../Controllers/post')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//test POST data
routes.get('/', postControl.home)
routes.post('/post', urlencodedParser, postControl.post)


//test POST data with JSON
routes.get('/json', postControl.json)
routes.post('/post-json', jsonParser, postControl.postjson);

module.exports = routes
