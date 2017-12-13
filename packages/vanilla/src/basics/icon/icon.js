import Interface from 'interface.json';
import Core from '_core.js';
import Icons from 'basics/icons/icons';
import Template from './icon.html';
import './icon.scss';

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
        AvailableSizes,
      );
    }
  }

  _confirmNameOrSVG(icon, size) { // eslint-disable-line consistent-return
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

Icon._interface = Interface.basics.Icon;
Icon._defaults = {
  nameOrSVG: '',
};

Icon.AvailableSizes = AvailableSizes;

export default Icon;
