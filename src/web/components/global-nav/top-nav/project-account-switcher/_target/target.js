import './target.scss';

var Template = require('./target.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Item = require('../_item/item.js');

/**
 * Creates an Target
 *
 * @class
 */

class Target extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);

        options._type = "project";

        this.item = new Item(options);
    }

    _componentDidMount() {
        this.mountPartialToComment('ITEM', this.item);
    }

}

Target._interface = {
    "methods": {
        "setLabel": {},
        "setImage": {}
    }
};
Target._defaults = {};
Target._partials = {};

module.exports = Target;