import './project.scss';

var Template = require('./project.html');
var Interface = require('interface.json');
var Core = require('_core.js');
var initials = require('../../../../../helpers/js/_initials.js');

/**
 * Creates an Project
 *
 * @class
 */

class Project extends Core {

    constructor(options){
        super(options);
        options.initials = initials(options.label);

        this._render(Template, options);
    }

}

Project._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Project._defaults = {};
Project._partials = {};

module.exports = Project;