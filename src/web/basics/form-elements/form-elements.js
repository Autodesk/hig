var Interface = require('interface.json');
var Core = require('_core.js');

var PasswordField = require('./password-field/password-field.js');
var TextField = require('./text-field/text-field.js');
var TextArea = require('./text-area/text-area.js');
var Range = require('./range/range.js');

/**
 * Holder for FormElements
 *
 * @class
 */

class FormElements extends Core {

    constructor(options){
        super(options);
    }

}

FormElements._interface = Interface['basics']['FormElements'];
FormElements._defaults = {};
FormElements._partials = {
    PasswordField: PasswordField,
    TextField: TextField,
    TextArea: TextArea,
    Range: Range
};

module.exports = FormElements;