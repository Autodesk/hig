import './flyout.scss';

const Template = require('./flyout.html');
const Interface = require('interface.json');
const Core = require('../../helpers/js/_core.js');

import CSSTransition from '../../helpers/js/css-transition.js';

const OPENING_CLASS = 'hig__flyout--entering';
const OPENED_CLASS = 'hig__flyout--entered';
const CLOSING_CLASS = 'hig__flyout--exiting';
const CLOSED_CLASS = 'hig__flyout--exited';
const ANIMATION_CLASSES = [
  OPENING_CLASS,
  OPENED_CLASS,
  CLOSING_CLASS,
  CLOSED_CLASS
];

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
    this.flyoutContainer = this._findDOMEl('.hig__flyout__container', this.el);
    this.containerAnimation = new CSSTransition(this.el, 'hig__flyout')
  }

  open() {
    this.containerAnimation.enter();
  };

  close() {
    this.containerAnimation.exit();
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
      ...Flyout.AvailableAnchorPoints.map(
        s => `hig__flyout__container--anchor-${s}`
      )
    );
    container.classList.add(`hig__flyout__container--anchor-${anchorPoint}`);
  }

  _callbackIfClickOutside(callback, event) {
    if (this.el.contains(event.target) || this.el === event.target) {
      return;
    }
    if (this.containerAnimation.isEntering()) {
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
