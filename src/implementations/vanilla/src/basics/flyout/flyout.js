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

const AVAILABLE_TYPES = [
  'tooltip', 
  'default'
]

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
    this._setType(this.initialOptions.type); 
  }

  open() {
    this.el.classList.add(OPEN_CLASS);
  }

  close() {
    this.el.classList.remove(OPEN_CLASS);
  }

  _setType(type){
    if (!Flyout.AvailableTypes.includes(type)) {
      console.error(
        `Flyout cannot have type "${type}". Only these inset types are allowed: `,
        Flyout.AvailableTypes
      );
      return;
    }

    
    this.el.classList.remove(
      ...Flyout.AvailableTypes.map(s => `hig__flyout--${s}`)
    );

    this.el.classList.add(`hig__flyout--${type}`);
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

Flyout.AvailableTypes = AVAILABLE_TYPES;
Flyout.AvailableAnchorPoints = ANCHOR_POINTS;

module.exports = Flyout;
