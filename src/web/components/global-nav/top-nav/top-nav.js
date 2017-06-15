import './top-nav.scss';

var Template = require('./top-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Profile = require('./profile/profile.js');
var Shortcut = require('./shortcut/shortcut.js');
var Help = require('./help/help.js');
var ProjectAccountSwitcher = require('./project-account-switcher/project-account-switcher.js');
var Search = require('./search/search.js');

/**
 * Creates an TopNav
 *
 * @class
 */

class TopNav extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    onHamburgerClick(fn){
        return this._attachListener("click", '.js-hig__global-nav__top-nav__hamburger', this.el, fn);
    }

    setLogo(logo){
        this._setLogoAttributeForTag("img","src",logo);
    }

    setLogoLink(link){
        this._setLogoAttributeForTag("a","href",link);
    }

    addProfile(instance){
        this.mountPartialToComment(this._comment(instance), instance);
    }

    addProjectAccountSwitcher(instance){
        this.mountPartialToComment(this._comment(instance), instance);
    }

    addShortcut(instance) {
        this.mountPartialToComment(this._comment(instance), instance);
    }

    addHelp(instance) {
      this.mountPartialToComment(this._comment(instance), instance);
    }

    _setLogoAttributeForTag(tag,attr,val) {
        const scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
        this._findDOMEl(tag, scope).setAttribute(attr, val);
    }

    _comment(instance) {
        const lookup = {
            Profile: "PROFILE",
            ProjectAccountSwitcher: 'PROJECT_ACCOUNT_SWITCHER',
            Shortcut: "SHORTCUT",
            Help: "SHORTCUT"
        };
        return lookup[instance.constructor.name];
    }

    addSearch(searchInstance, referenceInstance){
        if(searchInstance instanceof Search){
            this.mountPartialToComment('SEARCH', searchInstance, referenceInstance);
        }
    }

    sidenavOpen() {
        this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.add("hig__global-nav__top-nav__hamburger--menuopen");
    }

    sidenavClosed() {
        this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.remove("hig__global-nav__top-nav__hamburger--menuopen");
    }

}

TopNav._interface = Interface['components']['GlobalNav']['partials']['TopNav'];
TopNav._defaults = {
    logo: "link",
    logoLink: "#"
};

TopNav._partials = {
    Profile: Profile,
    ProjectAccountSwitcher: ProjectAccountSwitcher,
    Search: Search,
    Shortcut: Shortcut,
    Help: Help
};

module.exports = TopNav;
