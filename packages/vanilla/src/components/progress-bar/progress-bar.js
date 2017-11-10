import Interface from 'interface.json';
import Core from '_core.js';
import './progress-bar.scss';
import Template from './progress-bar.html';

class ProgressBar extends Core {
  constructor(options) {
    super(options);

    this._render(Template, options);
  }

  _componentDidMount() {
    this.bar = this._findDOMEl(
      '.hig__progress-bar__bar',
      this.el
    );
  }

  setPercentComplete(percentComplete) {
    this.el.classList.add('hig__progress-bar--determinate');
    this.bar.style.width = `${this._renderedPercent(percentComplete)}%`;
  }

  _renderedPercent(percent) {
    const formattedPercent = parseInt(percent, 10);
    if (formattedPercent === 100) { return 101; }
    return formattedPercent;
  }
}

ProgressBar._interface = Interface.components.ProgressBar;
ProgressBar._defaults = {};
ProgressBar._partials = {};

export default ProgressBar;
