var express = require('express');
var fs = require('fs');
var Item = require('../models/item');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('tenant');
});

router.get('/itemDetails:itemId', function (req, res, next) {
    Item.findById(req.params.itemId, function (err, item) {
        if (err) res.status(400).send(err);
        res.render('showDetail', {
            apartment: item.apartment,
            tenant: item.tenant,
            cost: item.cost,
            rooms: item.rooms,
            roomsA: item.roomsA
        });
    });
});

router.get('/makeEntry', function (req, res, next) {
    res.render('makeEntry');
});

router.get('/changeEntry:itemId', function (req, res, next) {
    Item.findById(req.params.itemId, function (err, item) {
        if (err) res.status(400).send(err);
        res.render('changeEntry', {
            apartment: item.apartment,
            tenant: item.tenant,
            cost: item.cost,
            rooms: item.rooms,
            roomsA: item.roomsA
            // id: item._id.toString()
        });
    });
});

module.exports = router;
