const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//test POST data
routes.get('/', (req, res) => {
    res.render('view', { qs: req.query })
})

routes.post('/post', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('post', { data: req.body });
    // console.log(req.body);
});

module.exports = routes
