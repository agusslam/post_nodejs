const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//test POST data
routes.get('/', (req, res) => {
    res.render('view')
})
routes.post('/post', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('post', { data: req.body });
    // console.log(req.body);
});


//test POST data with JSON
routes.get('/json', (req, res) => {
    res.render('viewjson')
})
routes.post('/post-json', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('postjson', { data: req.body });
    // console.log(req.body);
});


module.exports = routes
