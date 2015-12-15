'use strict';

// this is the default class for Controller !
class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    render(file, option) {
        console.log('render');
    }
}

module.exports = Controller;
