import Interface from 'interface.json';
import Core from '_core.js';
import './tooltip.scss';
import Flyout from '../flyout/flyout';

const ANCHOR_POINTS = [
  'top-center',
  'right-center',
  'bottom-center',
  'left-center'
];


/**
 * Creates an PasswordField
 *
 * @class
 */

class Tooltip extends Core {
  constructor(options) {
    super(options);
    this._render('<div></div>', options);
    this.initialOptions = options;
    this.flyout = new Flyout({ type: 'tooltip' });
  }

  mount(mountEl) {
    this.flyout.mount(mountEl);
  }

  open() {
    this.flyout.open();
  }

  close() {
    this.flyout.close();
  }

  onClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  addTarget(targetElement) {
    this.flyout.addTarget(targetElement);
  }

  setContent(content) {
    const contentContainer = this._ensureContentContainer();
    contentContainer.textContent = content;
    this.flyout.addSlot(contentContainer);
  }

  setAnchorPoint(anchorPoint) {
    if (!Tooltip.AvailableAnchorPoints.includes(anchorPoint)) {
      console.error(
        `Tooltip cannot have anchorPoint "${anchorPoint}". Only these inset anchorPoints are allowed: `,
        Tooltip.AvailableAnchorPoints
      );
    } else {
      this.flyout.setAnchorPoint(anchorPoint);
    }
  }

  _ensureContentContainer() {
    const existingEl = document.querySelector('.hig__flyout__tooltip__content');
    if (existingEl) {
      return existingEl;
    }
    const contentContainer = document.createElement('span');
    contentContainer.classList.add('hig__flyout__tooltip__content');
    return contentContainer;
  }
}


Tooltip._interface = Interface.basics.Tooltip;

Tooltip._defaults = {
  anchorPoint: 'top-center'
};

Tooltip.AvailableAnchorPoints = ANCHOR_POINTS;
export default Tooltip;
