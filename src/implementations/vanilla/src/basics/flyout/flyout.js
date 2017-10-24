import './flyout.scss';

const Template = require('./flyout.html');
const Interface = require('interface.json');
const Core = require('../../helpers/js/_core.js');

const OPENING_CLASS = 'hig__flyout--opening';
const OPENED_CLASS = 'hig__flyout--opened';
const CLOSING_CLASS = 'hig__flyout--closing';
const CLOSED_CLASS = 'hig__flyout--closed';
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
  }

  open() {
    if (
      this.el.classList.contains(OPENING_CLASS) ||
      this.el.classList.contains(OPENED_CLASS)
    ) {
      return;
    }

    this._resetAnimationState();
    this.flyoutContainer.addEventListener(
      'animationend',
      this.handleOpenComplete
    );
    this.el.classList.add(OPENING_CLASS);
  }

  handleOpenComplete = (event) => {
    this._resetAnimationState();
    this.el.classList.add(OPENED_CLASS);
  };

  close() {
    if (
      this.el.classList.contains(CLOSING_CLASS) ||
      this.el.classList.contains(CLOSED_CLASS)
    ) {
      return;
    }
    console.log('Closing flyout');
    this._resetAnimationState();
    this.flyoutContainer.addEventListener(
      'animationend',
      this.handleCloseComplete
    );
    this.el.classList.add(CLOSING_CLASS);
  }

  handleCloseComplete = (event) => {
    this._resetAnimationState();
    this.el.classList.add(CLOSED_CLASS);
  };

  _resetAnimationState() {
    this.el.classList.remove(...ANIMATION_CLASSES);
    this.flyoutContainer.removeEventListener(
      'animationend',
      this.handleOpenComplete
    );
    this.flyoutContainer.removeEventListener(
      'animationend',
      this.handleCloseComplete
    );
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
    if (this.el.classList.contains(OPENED_CLASS)) {
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
