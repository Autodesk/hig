import Interface from 'interface.json';
import Core from '_core.js';
import './avatar.scss';
import Template from './avatar.html';

const Sizes = ['small', 'medium', 'large', 'extralarge'];

/**
 * Creates an Avatar
 *
 * @class
 */

class Avatar extends Core {
  constructor(options) {
    super(options);
    if (options && options.name && options.name.length > 0) {
      options.initials = this._getInitials(options.name);
      options.background = this._getBackgroundId(options.name);
    }
    this._render(Template, options);
  }

  _getInitials(name) {
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }

  _getBackgroundId(name) {
    return this._convertRange(name.charCodeAt(0) - 65, [0, 26], [1, 9]);
  }

  _convertRange(value, r1, r2) {
    return Number((value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0]).toFixed();
  }

  setName(name) {
    this._findDOMEl('.hig__avatar__initials', this.el).textContent = this._getInitials(name);
  }

  setSize(size) {
    this._clearSizesClasses();
    this.el.classList.add(`hig__avatar--size--${size}`);
  }

  setImage(image) {
    this.el.querySelector('img').setAttribute('src', image);
  }

  _clearSizesClasses() {
    Sizes.forEach((t) => {
      this.el.classList.remove(`hig__avatar--size--${t}`);
    });
  }
}

Avatar._interface = Interface.components.Avatar;
Avatar._defaults = {
  name: '',
  size: 'large',
  image: '',
};
Avatar._partials = {};

Avatar.AvailableSizes = Sizes;

export default Avatar;
