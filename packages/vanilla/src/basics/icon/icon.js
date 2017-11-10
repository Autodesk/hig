import './icon.scss';

const Template = require('./icon.html');
const Core = require('../../helpers/js/_core.js');
const Icons = require('../icons/icons.js');

const AvailableSizes = ['24', '16'];

/**
 * Creates an icon
 *
 * @class
 */

class Icon extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.nameOrSVG) {
      this.setNameOrSVG(this.initialOptions.nameOrSVG, this.initialOptions.size);
    }
  }

  setNameOrSVG(icon, size = '24') {
    if (AvailableSizes.indexOf(size) > -1) {
      const iconString = this._confirmNameOrSVG(icon, size);
      this._el.innerHTML = iconString;
    } else {
      console.error(
        `Icon named "${icon} size "${size}" not found, only these size are allowed: `,
        AvailableSizes
      );
    }
  }

  _confirmNameOrSVG(icon, size) {
    const isNamedIcon = Icons[`${icon}-${size}`];
    const isSVG = /^<svg/.test(icon);

    if (isNamedIcon) {
      return isNamedIcon;
    } else if (isSVG) {
      return icon;
    }
    console.warn(`NO HIG ICON: ${icon}`);
  }
}

Icon._defaults = {
  nameOrSVG: ''
};

Icon.AvailableSizes = AvailableSizes;

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Icon._interface = Interface.basics.Icon;
}

module.exports = Icon;
