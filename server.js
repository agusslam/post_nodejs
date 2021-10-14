const express = require('express')
const bodyParser = require('body-parser')
const qs = require('qs')

const app = express()
const port = 8001
const routes = require('./Routes/routes.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(routes)

app.set('view engine', 'ejs')

app.use('/', express.static('public'));

app.listen(port, () => { console.log(`Server ready on ${port}`) })


