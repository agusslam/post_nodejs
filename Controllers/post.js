
//Controller for input form ajah
exports.home = (req, res) => {
    res.render('view')
}
exports.post = (req, res) => {
    // console.log(req.body);
    res.render('post', { data: req.body })
    // console.log(req.body);
}

// Controller for JSON Fetch
exports.json = (req, res) => {
    res.render('viewjson')
}
exports.postjson = (req, res) => {
    // console.log(req.body);
    res.render('postjson', { data: req.body })
    // res.send({ data: req.body })
}