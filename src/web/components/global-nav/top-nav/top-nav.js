import './top-nav.scss';

var Template = require('./top-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Profile = require('./profile/profile.js');

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
        return this._attachListener("click", '.js-hig__global-nav__container__top-nav__hamburger', this.el, fn);
    }

    setLogo(logo){
        var scope = this._findDOMEl('.hig__global-nav__container__top-nav__logo', this.el);
        this._findDOMEl("img", scope).setAttribute("src", logo);
    }

    setLogoLink(link){
        var scope = this._findDOMEl('.hig__global-nav__container__top-nav__logo', this.el);
        this._findDOMEl("a", scope).setAttribute("href", link);
    }

    addProfile(profileInstance){
        if (profileInstance instanceof Profile){
            this.mountPartialToComment('PROFILE', profileInstance);
        }
    }

}

TopNav._interface = Interface['components']['GlobalNav']['partials']['TopNav'];
TopNav._defaults = {
    logo: "link",
    logoLink: "#"
};

TopNav._partials = {
    Profile: Profile
};


module.exports = TopNav;