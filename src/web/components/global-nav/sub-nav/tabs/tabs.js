import './tabs.scss';

var Template = require('./tabs.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Tab = require('./tab/tab.js');

/**
 * Creates a Tabs
 *
 * @class
 */

class Tabs extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    addTab(tabInstance, referenceTab){
        if(tabInstance instanceof Tab){
            this.mountPartialToComment('TAB', tabInstance, referenceTab)
        }
    }

}

Tabs._interface = Interface['components']['GlobalNav']['partials']['SubNav']['partials']['Tabs'];
Tabs._defaults = {};
Tabs._partials = {
    Tab: Tab
};

module.exports = Tabs;