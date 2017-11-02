import './progress-ring.scss';

const Template = require('./progress-ring.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const ProgressRingIndeterminateMedium = require('./progress-ring-indeterminate-m');

const AvailableSizes = ['xs', 's', 'm', 'l'];

class ProgressRing extends Core {
  static _partials = {};
  static _defaults = {
    size: AvailableSizes[2]
  }
  static AvailableSizes = AvailableSizes;

  constructor(options = {}) {
    super(options);

    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.setSize(this.initialOptions.size);
  }

  setSize(size) {
    if (!AvailableSizes.includes(size)) {
      console.error(
        `ProgressRing size "${size}" not found, only these sizes are allowed: `,
        AvailableSizes,
      );
      return;
    }

    this.animation = new ProgressRingIndeterminateMedium(this.el);
  }

  setPercentComplete(percentComplete) {

  }
}

ProgressRing._interface = Interface.components.ProgressRing;

module.exports = ProgressRing;
