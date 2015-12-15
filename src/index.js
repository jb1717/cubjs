'use strict';

var loadConfig = require('./loadConfig');

// reference to the singleton Cubjs
var instance = null;

// the main class for the awesome cub.js
class Cubjs {
    constructor(dirname) {
        this.config = loadConfig(dirname);
        console.log(this.config);
    }

    // init function (singleton style)
    static init(dirname) {
        if (instance === null)
            instance = new Cubjs(dirname);
        return (instance);
    }

    static controller() {
        return (require('./controller'));
    }
}

module.exports = Cubjs;
