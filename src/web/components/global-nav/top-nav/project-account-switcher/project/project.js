import './project.scss';

var Template = require('./project.html');
var Interface = require('interface.json');
var Core = require('_core.js');
var initials = require('../../../../../helpers/js/_initials.js');

/**
 * Creates an Project
 *
 * @class
 */

class Project extends Core {

    constructor(options){
        super(options);
        options.initials = initials(options.label);

        this._render(Template, options);
    }

    setImage(imageUrl) {
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__project__image')
            .setAttribute("src", imageUrl);
    }

    setLabel(label) {
        // Update the label
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__project__label')
            .innerText = label;
        // Update the image alt attribute
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__project__image')
            .setAttribute("alt", label);
        // Update the placeholder image initials
        this.el
            .querySelector('.hig__global-nav__top-nav__project-account-switcher__project__image-placeholder')
            .innerText = initials(label);
    }

    activate() {
        this.el.classList.add("hig__global-nav__top-nav__project-account-switcher__project--active");
    }

    deactivate() {
        this.el.classList.remove("hig__global-nav__top-nav__project-account-switcher__project--active");
    }

    onClick(fn) {
        return this._attachListener("click", this.el, this.el, fn);
    }

}

Project._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Project._defaults = {};
Project._partials = {};

module.exports = Project;