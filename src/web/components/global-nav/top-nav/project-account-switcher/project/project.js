import './project.scss';

var Template = require('./project.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an Project
 *
 * @class
 */

class Project extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    

}

Project._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['']['partials']['Project'];
Project._defaults = {};
Project._partials = {};

module.exports = Project;