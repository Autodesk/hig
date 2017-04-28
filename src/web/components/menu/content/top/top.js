import './top.scss';

var Template = require('./top.html');
var Interface = require('../../../../../interface/interface.json');
var Core = require('../../../../shared/js/_core.js');


/**
 * Creates an Top
 *
 * @class
 */

class Top extends Core {

    constructor(options){
        super(options);
        this._render(Template, options);
    }

    onHamburgerClick(fn){
        return this._attachListener("click", '.js-hig__menu__content__top__hamburger', this.el, fn);
    }

    setLogo(logo){
        var scope = this._findDOMEl('.hig__menu__content__top__logo', this.el);
        this._findDOMEl("img", scope).setAttribute("src", logo);
    }

    setLogoLink(link){
        var scope = this._findDOMEl('.hig__menu__content__top__logo', this.el);
        this._findDOMEl("a", scope).setAttribute("href", link);
    }

}

Top._interface = Interface['Components']['Menu']['partials']['Content']['partials']['Top'];
Top._defaults = {
    logo: "link",
    logoLink: "#"
};


module.exports = Top;