import './spacer.scss';

const Template = require('./spacer.html');
var Interface = require('interface.json');
var Core = require('../../helpers/js/_core.js');

const SIZES = {
  none: 0,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 64
};

const TYPES = ['stack', 'inline'];

/**
 * Creates a Spacer
 *
 * @class
 */

class Spacer extends Core {
    constructor(options = {}) {
      super(options);
      this._render(Template, options);
      this.initialOptions = options;
    }

    _componentDidMount() {
        if (this.initialOptions.type) {
            this.setType(this.initialOptions.type);
        }

        if (this.initialOptions.width) {
            this.setWidth(this.initialOptions.width);
        }

        if (this.initialOptions.inset) {
            this.setInset(this.initialOptions.inset);
        }
    }

    setWidth(width = 'none') {
        if (!Spacer.AvailableSizes.includes(width)) {
            console.error(`Spacer cannot have width "${width}". Only these widths are allowed: `, Spacer.AvailableSizes);
            return;
        }
        this.el.classList.remove(...Spacer.AvailableSizes.map(s => `hig__spacer--width-${s}`));
        this.el.classList.add(`hig__spacer--width-${width}`);
    }

    setType(type) {
        if (!Spacer.AvailableTypes.includes(type)) {
            console.error(`Spacer cannot have type "${type}". Only these types are allowed: `, Spacer.AvailableTypes);
            return;
        }
        this.el.classList.remove(...Spacer.AvailableTypes.map(t => `hig__spacer--${t}`));
        this.el.classList.add(`hig__spacer--${type}`);
    }

    setInset(size = 'none') {
        if (!Spacer.AvailableSizes.includes(size)) {
            console.error(`Spacer cannot have inset size "${size}". Only these inset sizes are allowed: `, Spacer.AvailableSizes);
            return;
        }
        this.el.classList.remove(...Spacer.AvailableSizes.map(s => `hig__spacer--inset-${s}`));
        this.el.classList.add(`hig__spacer--inset-${size}`);
    }

    addSlot(slotEl) {
        this.el.appendChild(slotEl);
    }
}

Spacer._interface = Interface['basics']['Spacer'];
Spacer._defaults = {
  type: 'stack',
  width: 'm',
  inset: null
};

Spacer.SizeMap = SIZES;
Spacer.AvailableSizes = Object.keys(SIZES);
Spacer.AvailableTypes = TYPES;

module.exports = Spacer;
