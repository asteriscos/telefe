var expect = require('chai').expect;
var search = require('../api/models/searchModel');
var compass = require('../api/business/compass');


describe('searchWord()', function () {
    it('palabra hacia el este', function () {
        var east = {
            word: 'chao',
            coor: [
                [3, 1],
                [3, 2],
                [3, 3],
                [3, 4]
            ]
        };

        var arrCoordinates = compass.search(east.word);

        expect(arrCoordinates).to.eql(east.coor);

    });
    ////////////////////////////////////////
    
    it('palabra hacia el sudeste', function () {
        var southeast = {
            word: 'java',
            coor: [
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5]
            ]
        };

        var arrCoordinates = compass.search(southeast.word);

        expect(arrCoordinates).to.be.eql(southeast.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el south', function () {
        var south = {
            word: 'viacom',
            coor: [
                [1, 3],
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3],
                [6, 3]
            ]
        };

        var arrCoordinates = compass.search(south.word);

        expect(arrCoordinates).to.be.eql(south.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el sudoeste', function () {
        var southwest = {
            word: 'lara',
            coor: [
                [2, 4],
                [3, 3],
                [4, 2],
                [5, 1]
            ]
        };

        var arrCoordinates = compass.search(southwest.word);

        expect(arrCoordinates).to.be.eql(southwest.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el oeste', function () {
        var west = {
            word: 'ayosa',
            coor: [
                [5, 5],
                [5, 4],
                [5, 3],
                [5, 2],
                [5, 1]
            ]
        };

        var arrCoordinates = compass.search(west.word);

        expect(arrCoordinates).to.be.eql(west.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el noroeste', function () {
        var northwest = {
            word: 'vaja',
            coor: [
                [4, 4],
                [3, 3],
                [2, 2],
                [1, 1]
            ]
        };

        var arrCoordinates = compass.search(northwest.word);

        expect(arrCoordinates).to.be.eql(northwest.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el norte', function () {
        var north = {
            word: 'moca',
            coor: [
                [6, 3],
                [5, 3],
                [4, 3],
                [3, 3]
            ]
        };

        var arrCoordinates = compass.search(north.word);

        expect(arrCoordinates).to.be.eql(north.coor);

    });
    ////////////////////////////////////////
    it('palabra hacia el norteste', function () {
        var northeast = {
            word: 'cost',
            coor: [
                [4, 3],
                [3, 4],
                [2, 5],
                [1, 6]
            ]
        };

        var arrCoordinates = compass.search(northeast.word);

        expect(arrCoordinates).to.be.eql(northeast.coor);

    });
    
});