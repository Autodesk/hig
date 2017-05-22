import './tab.scss';

var Template = require('./tab.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a Tab
 *
 * @class
 */

class Tab extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    onClick(fn){
        return this._attachListener("click", this.el, this.el, fn);
    }

    setLabel(label) {
        this.el.textContent = label;
        this.el.setAttr('label', label);
    }

    activate() {
        this.el.classList.add("hig__global-nav__sub-nav__tabs__tab--active");
    }

    deactivate() {
        this.el.classList.remove("hig__global-nav__sub-nav__tabs__tab--active");
    }
}

Tab._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['SubNav']['partials']['Tabs']['partials']['Tab'];
Tab._defaults = {
    label: 'Tab'
};
Tab._partials = {
    Tab: Tab
};

module.exports = Tab;
