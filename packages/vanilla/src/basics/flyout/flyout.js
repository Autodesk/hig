/* globals window document */
import Interface from 'interface.json';
import Core from '_core.js';
import CSSTransition from 'helpers/js/css-transition';
import Template from './flyout.html';
import './flyout.scss';

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

const AVAILABLE_TYPES = ['tooltip', 'default'];

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
    this.flyoutContainer = this._findDOMEl('.hig__flyout__container', this.el);
    this.flyoutContent = this._findDOMEl('.hig__flyout__panel', this.el);
    this.containerAnimation = new CSSTransition({
      el: this.el,
      class: 'hig__flyout',
      enteringDuration: 300,
      exitingDuration: 300
    });
  }

  open() {
    this.containerAnimation.enter();
    this._flyoutVisibleRight();
    this._flyoutVisibleLeft();
  }

  close() {
    this.containerAnimation.exit();
  }

  _setType(type = 'default') {
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
      ...Flyout.AvailableAnchorPoints.map(
        s => `hig__flyout__container--anchor-${s}`
      )
    );
    container.classList.add(`hig__flyout__container--anchor-${anchorPoint}`);

    const panel = this._findDOMEl('.hig__flyout__panel', this.el);
    panel.setAttribute('data-anchor-point', anchorPoint);

    this._flyoutVisibleRight();
    this._flyoutVisibleLeft();
  }

  _flyoutVisibleRight() {
    const viewPortWidth = document.documentElement.clientWidth;
    const flyoutPanel = this._findDOMEl('.hig__flyout__panel', this.el);
    const flyoutViewPortInfo = flyoutPanel.getBoundingClientRect();
    const chevron = this._findDOMEl('.hig__flyout__chevron', this.el);
    const target = this.el.firstElementChild;
    const targetInfo = target.getBoundingClientRect();
    const targetWidth = targetInfo.width / 2;
    const targetCenter = targetInfo.x + targetWidth;

    const chevronInfo = this._findDOMEl('.hig__flyout__chevron--dark', this.el).getBoundingClientRect();
    const chevronWidth = chevronInfo.width / 2;
    const chevronCenter = chevronInfo.x + chevronWidth;

    if (viewPortWidth < flyoutViewPortInfo.right) {
      const shiftDistance = (flyoutViewPortInfo.right - viewPortWidth) + 5;
      flyoutPanel.style.position = 'absolute';
      flyoutPanel.style.left = `-${shiftDistance}px`;
      chevron.style.zIndex = '9998';

      chevron.style.left = `-${chevronCenter - targetCenter}px`;
    }
  }

  _flyoutVisibleLeft() {
    const flyoutPanel = this._findDOMEl('.hig__flyout__panel', this.el);
    const flyoutViewportInfo = flyoutPanel.getBoundingClientRect();

    const target = this.el.firstElementChild;
    const chevronContainer = this._findDOMEl('.hig__flyout__chevron', this.el);

    if (flyoutViewportInfo.x < 0) {
      flyoutPanel.style.position = 'absolute';
      this._resetTopOrBottomFlyout(flyoutPanel, target, chevronContainer);
      this._resetRightFlyout(flyoutPanel);
    }
  }

  _resetTopOrBottomFlyout(flyoutPanel, target, chevronContainer) {
    const updatedFlyoutViewportInfo = flyoutPanel.getBoundingClientRect();
    const targetInfo = target.getBoundingClientRect();

    if (
      flyoutPanel.dataset.anchorPoint.includes('bottom-') ||
      flyoutPanel.dataset.anchorPoint.includes('top-')
    ) {
      const shiftDistance = updatedFlyoutViewportInfo.left - targetInfo.left;
      flyoutPanel.style.left = `-${shiftDistance}px`;

      if (flyoutPanel.dataset.anchorPoint.includes('bottom-')) {
        flyoutPanel.style.bottom = '0px';
      }
      this.updateChevronIndex(chevronContainer);
    }
  }

  _resetRightFlyout(flyoutPanel) {
    if (flyoutPanel.dataset.anchorPoint.includes('right-')) {
      const updatedAnchorPoint = flyoutPanel.dataset.anchorPoint.replace(
        /right-/,
        'left-'
      );
      this.setAnchorPoint(updatedAnchorPoint);
      flyoutPanel.style.position = 'static';
    }
  }

  _updateChevronIndex(chevron) {
    chevron.style.zIndex = '9998';
  }

  setMaxHeight(maxHeight) {
    if (maxHeight) {
      this.flyoutContent.style.maxHeight = `${maxHeight}px`;
    }
  }

  _callbackIfClickOutside(callback, event) {
    if (
      this.flyoutContainer.contains(event.target) ||
      this.flyoutContainer === event.target
    ) {
      return;
    }
    if (
      this.containerAnimation.isEntering() ||
      this.containerAnimation.isEntered()
    ) {
      callback(event);
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

export default Flyout;
