import './progress-ring.scss';

const Interface = require('interface.json');
const Core = require('_core.js');

const Template = require('./progress-ring.html');
const ProgressRingIndeterminate = require('./progress-ring-indeterminate');
const smallSVG = require('./progress-ring-s.svg');
const mediumsSVG = require('./progress-ring-m.svg');

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

    this.el.innerHTML = size === 's' ? smallSVG : mediumsSVG;

    this.animation = new ProgressRingIndeterminate(this.el);
  }

  setPercentComplete(percentComplete) {

  }
}

ProgressRing._interface = Interface.components.ProgressRing;

module.exports = ProgressRing;
