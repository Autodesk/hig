import './typography.scss';

var Interface = require('interface.json');
var Core = require('_core.js');

var Heading = require('./heading/heading.js');

/**
 * Creates an Typography in the SideNav
 *
 * @class
 */

class Typography extends Core {

    constructor(options){
        super(options);
    }

}

Typography._interface = Interface['basics']['Typography'];
Typography._defaults = {};
Typography._partials = {
    Heading: Heading
};

module.exports = Typography;