import './section.scss';

var Template = require('./section.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Group = require('./group/group.js');
var Collapse = require('./collapse/collapse.js');

/**
 * Creates an Section in the SideNav
 *
 * @class
 */

class Section extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    setHeaderLabel(label){
        this._findDOMEl(".hig__global-nav__side-nav__section__header__label", this.el).textContent = label;
    }

    setHeaderName(name){
        this._findDOMEl(".hig__global-nav__side-nav__section__header__name", this.el).textContent = name;
    }

    addGroup(groupInstance, referenceInstance){
        if(groupInstance instanceof Group){
            this.mountPartialToComment('GROUP', groupInstance, referenceInstance);
        }
    }

    addCollapse(CollapseInstance, referenceInstance){
        if(CollapseInstance instanceof Collapse){
            this.mountPartialToComment('COLLAPSE', CollapseInstance, referenceInstance);
        }
    }


}

Section._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section'];
Section._defaults = {
    "headerLabel": "Project",
    "headerName": "X"
};
Section._partials = {
    Group: Group,
    Collapse: Collapse
};

module.exports = Section;