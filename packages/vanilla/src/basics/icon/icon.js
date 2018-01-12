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

    this.size = this.initialOptions.size;
    this.nameOrSVG = this.initialOptions.nameOrSVG;
  }

  _componentDidMount() {
    this._setSizedIcon();
  }

  setNameOrSVG(icon) {
    this.nameOrSVG = icon;
    this._setSizedIcon();
  }

  setSize(size) {
    this.size = size;
    this._setSizedIcon();
  }

  _setSizedIcon() {
    const icon = this.nameOrSVG;
    const size = this.size;

    if (!(icon && size)) {
      return; // Silently return until name and size are set
    }

    if (AvailableSizes.indexOf(size) > -1) {
      const iconString = this._confirmNameOrSVG(icon, size);
      this.el.innerHTML = iconString;

      AvailableSizes.forEach(availableSize => this.el.classList.remove(`hig__icon--${availableSize}-size`));
      this.el.classList.add(`hig__icon--${size}-size`);
    } else {
      console.error(
        `Icon named "${icon} size "${size}" not found, only these size are allowed: `,
        AvailableSizes
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
  size: '24'
};

Icon.AvailableSizes = AvailableSizes;

export default Icon;
