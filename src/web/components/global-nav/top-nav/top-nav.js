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
        return this._attachListener("click", '.hig__global-nav__top-nav__hamburger', this.el, fn);
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

    addSearch(searchInstance, referenceInstance){
        this.mountPartialToComment(this._comment(instance), searchInstance, referenceInstance);
    }
    addHelp(instance) {
      this.mountPartialToComment(this._comment(instance), instance);
    }

    sidenavOpen() {
        this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.add("hig__global-nav__top-nav__hamburger--menuopen");
    }

    sidenavClosed() {
        this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.remove("hig__global-nav__top-nav__hamburger--menuopen");
    }

    _setLogoAttributeForTag(tag,attr,val) {
        const scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
        this._findDOMEl(tag, scope).setAttribute(attr, val);
    }

    _comment(instance) {
        // Doing this based on name (as String) will break in production due to obfuscation/name mangling.
        if (instance instanceof Profile) { return "PROFILE" }
        if (instance instanceof ProjectAccountSwitcher) { return "PROJECT_ACCOUNT_SWITCHER" }
        if (instance instanceof Shortcut) { console.log("SHORTCUT"); return "SHORTCUT" }
        if (instance instanceof Search) { return "SEARCH" }
        return "COMMENTNOTFOUND"
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
    Shortcut: Shortcut,
    Help: Help,
    Search: Search
};

module.exports = TopNav;