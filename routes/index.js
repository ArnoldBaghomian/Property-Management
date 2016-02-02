var express = require('express');
var fs = require('fs');
var Item = require('../models/item');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
