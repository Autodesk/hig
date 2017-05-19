import './top-nav.scss';

var Template = require('./top-nav.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var Avatar = require('./avatar/avatar.js');

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

    addAvatar(avatarInstance){
        if (avatarInstance instanceof Avatar){
            this.mountPartialToComment('AVATAR', avatarInstance);
        }
    }

}

TopNav._interface = Interface['components']['GlobalNav']['partials']['Container']['partials']['TopNav'];
TopNav._defaults = {
    logo: "link",
    logoLink: "#"
};

TopNav._partials = {
    Avatar: Avatar
}


module.exports = TopNav;