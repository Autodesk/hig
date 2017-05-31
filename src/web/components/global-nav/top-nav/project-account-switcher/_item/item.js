import './item.scss';

var Template = require('./item.html');
var Interface = require('interface.json');
var Core = require('_core.js');
var initials = require('../../../../../helpers/js/_initials.js');

/**
 * Creates an Project
 *
 * @class
 */

class Item extends Core {

    constructor(options){
        super(options);
        options.initials = initials(options.label);
        this.options = options;

        this._render(Template, options);
    }

    _componentDidMount() {
        this.el.classList.add(`hig__global-nav__top-nav__project-account-switcher__item--${this.options._type}`);
    }

    setImage(imageUrl) {
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image')
            .setAttribute("src", imageUrl);
    }

    setLabel(label) {
        // Update the label
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__label')
            .innerText = label;
        // Update the image alt attribute
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image')
            .setAttribute("alt", label);
        // Update the placeholder image initials
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image-placeholder')
            .innerText = initials(label);
    }

    activate() {
        this.el.classList.add("hig__global-nav__top-nav__project-account-switcher__item--active");
    }

    deactivate() {
        this.el.classList.remove("hig__global-nav__top-nav__project-account-switcher__item--active");
    }

    onClick(fn) {
        return this._attachListener("click", this.el, this.el, fn);
    }

}

Item._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Item._defaults = {};
Item._partials = {};

module.exports = Item;