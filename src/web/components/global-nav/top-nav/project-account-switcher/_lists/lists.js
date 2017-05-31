import './lists.scss';

var Template = require('./lists.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Lists
 *
 * @class
 */

class Lists extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addProject(newInstance, referenceInstance) {
        this.mountPartialToComment('PROJECTS', newInstance, referenceInstance);
    }

}

Lists._interface = {
    "methods": {
        "addAccount": {},
        "addProject": {},
    }
};
Lists._defaults = {};
Lists._partials = {};

module.exports = Lists;