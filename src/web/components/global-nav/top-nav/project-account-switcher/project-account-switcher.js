import './project-account-switcher.scss';

var Template = require('./project-account-switcher.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates an ProjectAccountSwitcher
 *
 * @class
 */

class ProjectAccountSwitcher extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }



}

ProjectAccountSwitcher._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['']['partials']['ProjectAccountSwitcher'];
ProjectAccountSwitcher._defaults = {};
ProjectAccountSwitcher._partials = {};

module.exports = ProjectAccountSwitcher;