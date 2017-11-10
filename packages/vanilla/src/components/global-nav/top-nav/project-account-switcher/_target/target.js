import Interface from 'interface.json';
import Core from '_core.js';
import './target.scss';
import Template from './target.html';
import Item from '../_item/item';
import Icon from '../../../../../basics/icon/icon';

/**
 * Creates an Target
 *
 * @class
 */

class Target extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.item = new Item(options);
  }

  _componentDidMount() {
    this.mountPartialToComment('ITEM', this.item);
    this._setIcon();
  }

  setLabel(label) {
    this.item.setLabel(label);
  }

  setImage(imageUrl) {
    this.item.setImage(imageUrl);
  }

  setType(type) {
    this.item._setType(type);
  }

  onClick(fn) {
    return this._attachListener('click', this.el, this.el, fn);
  }

  addCaret() {
    this._findDOMEl(
      '.hig__global-nav__top-nav__project-account-switcher__target__caret',
      this.el
    ).classList.remove(
      'hig__global-nav__top-nav__project-account-switcher__target__caret--hide'
    );
  }

  removeCaret() {
    this._findDOMEl(
      '.hig__global-nav__top-nav__project-account-switcher__target__caret',
      this.el
    ).classList.add(
      'hig__global-nav__top-nav__project-account-switcher__target__caret--hide'
    );
  }

  _setIcon() {
    const mountEl = this._findDOMEl('.hig__global-nav__top-nav__project-account-switcher__target__caret', this.el);
    this._findOrCreateIconComponent(mountEl).setNameOrSVG('caret');
  }

  _findOrCreateIconComponent(mountElOrSelector, name = "icon") {
    if (this[name]) {
      return this[name];
    }
      this[name] = new Icon({});
      this[name].mount(mountElOrSelector);
      return this[name];

  }
}

Target._interface = {
  methods: {
    setLabel: {},
    setImage: {},
    setType: {},
    onClick: {},
    addCaret: {},
    removeCaret: {}
  }
};
Target._defaults = {};
Target._partials = {};

export default Target;
