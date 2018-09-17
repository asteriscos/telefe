'use strict';
module.exports = function (app) {
    var search = require('../controllers/searchController');

    app.route('/search')
        .get(search.list);

    app.route('/clear')
        .get(search.empty);

    app.route('/search/:word')
        .get(search.searchWord);

};