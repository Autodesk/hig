import './radial-progress-indicator.scss';

const Template = require('./radial-progress-indicator.html');
const Interface = require('interface.json');
const Core = require('_core.js');
const IndeterminateRadialMedium = require('./indeterminate-radial-medium');

const AvailableSizes = ['xs', 's', 'm', 'l'];


// Segment color decay: 1s

class RadialProgressIndicator extends Core {
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

    this.animation = new IndeterminateRadialMedium(this.el);
  }

  setPercentComplete(percentComplete) {

  }
}

RadialProgressIndicator._interface = Interface.components.RadialProgressIndicator;

module.exports = RadialProgressIndicator;
