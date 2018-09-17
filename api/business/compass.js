let secuencias = ["AGVNFT", "XJILSB", "CHAOHD", "ERCVTQ", "ASOYAO", "ERMYUA", "TELEFE"];

module.exports = {
    search: function (word) {
        return searchMatrix(word.toUpperCase());
    }
}

function searchMatrix(word) {
    let arrFound = [],
        c = word[0];

    for (let y = 0; y < secuencias.length; y++) {
        for (let x = 0; x < secuencias[y].length; x++) {
            if (secuencias[y][x] == c) { //si encuentro el primer char
                arrFound = findDirections({
                    y: y,
                    x: x
                }, word)
            }
            if (arrFound.length) break;
        }
        if (arrFound.length) break;
    }
    return arrFound;
}

function findDirections(initPos, word) {
    compass.word = word;
    for (let dir in compass) {
        if (typeof compass[dir] == 'function') {
            if (compass[dir](initPos))
                break;
        }
    }
    return (compass.boolFound ? compass.arrFound : []);
}
let compass = {
    boolFound: false,
    arrFound: [],
    word: '',
    east: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y][initPos.x + wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y, 1 + initPos.x + wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    southeast: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y + wordkey] &&
                secuencias[initPos.y + wordkey][initPos.x + wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y + wordkey, 1 + initPos.x + wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    south: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y + wordkey] &&
                secuencias[initPos.y + wordkey][initPos.x] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y + wordkey, 1 + initPos.x]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    southwest: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y + wordkey] &&
                secuencias[initPos.y + wordkey][initPos.x - wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y + wordkey, 1 + initPos.x - wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    west: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y][initPos.x - wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y, 1 + initPos.x - wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    northwest: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y - wordkey] &&
                secuencias[initPos.y - wordkey][initPos.x - wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y - wordkey, 1 + initPos.x - wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    north: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y - wordkey] &&
                secuencias[initPos.y - wordkey][initPos.x] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y - wordkey, 1 + initPos.x]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    },
    northeast: function (initPos) {
        this.arrFound = [];
        for (let wordkey = 0; wordkey < this.word.length; wordkey++) {
            if (secuencias[initPos.y - wordkey] &&
                secuencias[initPos.y - wordkey][initPos.x + wordkey] == this.word[wordkey])
                this.arrFound.push([1 + initPos.y - wordkey, 1 + initPos.x + wordkey]);
            else
                break;
        }
        this.boolFound = (this.arrFound.length == this.word.length);
        return this.boolFound;
    }
};