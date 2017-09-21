import './flyout.scss';

const Template = require('./flyout.html');
const Interface = require('interface.json');
const Core = require('../../helpers/js/_core.js');

const OPEN_CLASS = 'hig__flyout--open';

const ANCHOR_POINTS = [
  'top-left',
  'top-center',
  'top-right',
  'right-top',
  'right-center',
  'right-bottom',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'left-top',
  'left-center',
  'left-bottom'
];

/**
 * Creates a flyout
 *
 * @class
 */

class Flyout extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.setAnchorPoint(this.initialOptions.anchorPoint);
  }

  open() {
    this.el.classList.add(OPEN_CLASS);
  }

  close() {
    this.el.classList.remove(OPEN_CLASS);
  }

  onClickOutside(fn) {
    return this._attachListener(
      'click',
      window.document.body,
      window.document.body,
      this._callbackIfClickOutside.bind(this, fn)
    );
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }

  addTarget(targetElement) {
    this.mountPartialToComment('TARGET', targetElement);
  }

  setAnchorPoint(anchorPoint) {
    if (!Flyout.AvailableAnchorPoints.includes(anchorPoint)) {
      console.error(
        `Flyout cannot have anchorPoint "${anchorPoint}". Only these inset anchorPoints are allowed: `,
        Flyout.AvailableAnchorPoints
      );
      return;
    }

    const container = this._findDOMEl('.hig__flyout__container', this.el);
    container.classList.remove(
      ...Flyout.AvailableAnchorPoints.map(s => `hig__flyout__container--anchor-${s}`)
    );
    container.classList.add(`hig__flyout__container--anchor-${anchorPoint}`);
  }

  _callbackIfClickOutside(callback, event) {
    if (this.el.contains(event.target) || this.el === event.target) {
      return;
    }
    if (this.el.classList.contains(OPEN_CLASS)) {
      callback();
    }
  }
}

Flyout._interface = Interface.basics.Flyout;
Flyout._defaults = {
  title: 'link',
  link: '#',
  anchorPoint: 'top-right'
};

Flyout.AvailableAnchorPoints = ANCHOR_POINTS;

module.exports = Flyout;
