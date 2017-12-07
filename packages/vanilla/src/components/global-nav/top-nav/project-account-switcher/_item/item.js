import Interface from 'interface.json';
import Core from '_core.js';
import './item.scss';
import Template from './item.html';
import initials from 'helpers/js/_initials';

const TYPES = ['account', 'project'];

/**
 * Creates an Project
 *
 * @class
 */

class Item extends Core {
  constructor(options) {
    super(options);
    options.initials = initials(options.label);
    this.options = options;

    this._render(Template, options);
  }

  _componentDidMount() {
    this._setType(this.options._type);
  }

  setImage(imageUrl) {
    this.el
      .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image')
      .setAttribute('src', imageUrl);
  }

  setLabel(label) {
    // Update the label
    this.el
      .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__label')
      .innerText = label;
    // Update the image alt attribute
    this.el
      .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image')
      .setAttribute('alt', label);
    // Update the placeholder image initials
    this.el
      .querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image-placeholder')
      .innerText = initials(label);
  }

  _setType(type) {
    if (!TYPES.includes(type)) { return; }

    TYPES.forEach((t) => {
      this.el.classList.remove(`hig__global-nav__top-nav__project-account-switcher__item--${t}`);
    });

    this.el.classList.add(`hig__global-nav__top-nav__project-account-switcher__item--${type}`);
  }

  activate() {
    this.el.classList.add('hig__global-nav__top-nav__project-account-switcher__item--active');
  }

  deactivate() {
    this.el.classList.remove('hig__global-nav__top-nav__project-account-switcher__item--active');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }
}

Item._interface = Interface.components.GlobalNav.partials.TopNav.partials.ProjectAccountSwitcher.partials.Project;
Item._defaults = {
  label: '',
  image: '',
};
Item._partials = {};

export default Item;
