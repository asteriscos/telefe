'use strict';

let mongoose = require('mongoose'),
    search = mongoose.model('searches'),
    compass = require('../business/compass');

exports.list = function (req, res) {
    search.find({}, function (err, search) {
        if (err)
            res.send(err);
        res.json(search);
    });
};

exports.searchWord = function (req, res) {

    let word = req.params.word;
    let coor = compass.search(word);
    let newSearch = new search({
        word: req.params.word,
        coordinates: coor,
        found: (coor.length > 0)
    });
    newSearch.save(function (err, search) {
        if (err)
            res.send(err);

        res.json({
            message: search.coordinates
        });
    });

};
exports.empty = function (req, res) {
    search.remove({}, function (err, response) {
        if (err)
            res.send(err);
        res.json(response);
    });
};