import './typography.scss';

var Interface = require('interface.json');
var Core = require('_core.js');

var Heading = require('./heading/heading.js');
var Body = require('./body/body.js');
var Caption = require('./caption/caption.js');

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
    Heading: Heading,
    Body: Body,
    Caption: Caption
};

module.exports = Typography;