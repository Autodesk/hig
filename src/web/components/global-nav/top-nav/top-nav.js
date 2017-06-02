import './top-nav.scss';

var Template = require('./top-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Profile = require('./profile/profile.js');
var ProjectAccountSwitcher = require('./project-account-switcher/project-account-switcher.js');

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
        var scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
        this._findDOMEl("img", scope).setAttribute("src", logo);
    }

    setLogoLink(link){
        var scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
        this._findDOMEl("a", scope).setAttribute("href", link);
    }

    addProfile(profileInstance){
        if (profileInstance instanceof Profile){
            this.mountPartialToComment('PROFILE', profileInstance);
        }
    }

    addProjectAccountSwitcher(instance){
        if (instance instanceof ProjectAccountSwitcher){
            this.mountPartialToComment('PROJECT_ACCOUNT_SWITCHER', instance);
        }
    }

}

TopNav._interface = Interface['components']['GlobalNav']['partials']['TopNav'];
TopNav._defaults = {
    logo: "link",
    logoLink: "#"
};

TopNav._partials = {
    Profile: Profile,
    ProjectAccountSwitcher: ProjectAccountSwitcher
};


module.exports = TopNav;