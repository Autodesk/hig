import './linear-progress-indicator.scss';

const Template = require('./linear-progress-indicator.html');
const Interface = require('interface.json');
const Core = require('_core.js');

class LinearProgressIndicator extends Core {
  constructor(options) {
    super(options);

    this._render(Template, options);
  }

  _componentDidMount() {
    this.bar = this._findDOMEl(
      '.hig__linear-progress-indicator__bar',
      this.el
    );
  }

  setPercentComplete(percentComplete) {
    this.el.classList.add('hig__linear-progress-indicator--determinate');
    this.bar.style.width = `${this._renderedPercent(percentComplete)}%`;
  }

  _renderedPercent(percent) {
    const formattedPercent = parseInt(percent, 10);
    if (formattedPercent === 100) { return 101; }
    return formattedPercent;
  }
}

LinearProgressIndicator._interface = Interface.components.LinearProgressIndicator;
LinearProgressIndicator._defaults = {};
LinearProgressIndicator._partials = {};

module.exports = LinearProgressIndicator;
