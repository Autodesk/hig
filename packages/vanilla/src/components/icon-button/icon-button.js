import './icon-button.scss';

const Template = require('./icon-button.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const Icon = require("../../basics/icon/icon.js");


/**
 * Creates an icon button
 *
 * @class
 */

class IconButton extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options
  }

  _componentDidMount(){
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }
  

  setTitle(title) {
    this.el.setAttribute('title', title);
  }

  setLink(link) {
    this.el.setAttribute('href', link);
  }

  setIcon(icon) {
    const mountEl = this._findDOMEl('.hig__icon-button__icon', this.el)
    this._findOrCreateIconComponent(mountEl).setNameOrSVG(icon);
  }

  disable() {
    this.el.classList.add('hig__icon-button--disabled');
    this.el.setAttribute('tabindex', '-1');
  }

  enable() {
    this.el.classList.remove('hig__icon-button--disabled');
    this.el.setAttribute('tabindex', '0');
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  onHover(fn) {
    return this._attachListener('hover', this.el, this.el, fn);
  }

  onFocus(fn) {
    return this._attachListener('focusin', this.el, this.el, fn);
  }

  onBlur(fn) {
    return this._attachListener('focusout', this.el, this.el, fn);
  }

  _findOrCreateIconComponent(mountElOrSelector, name='icon') {
    if (this[name]) {
        return this[name];
    } else {
        this[name] = new Icon({});
        this[name].mount(mountElOrSelector);
        return this[name];
    }
  }
  
}

IconButton._interface = Interface.components.IconButton;
IconButton._defaults = {
  title: 'link',
  link: '#',
  icon: false
};

module.exports = IconButton;
