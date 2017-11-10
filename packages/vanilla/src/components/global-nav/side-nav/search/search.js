import Interface from 'interface.json';
import Core from '_core.js';
import './search.scss';
import Template from './search.html';
import Icon from '../../../../basics/icon/icon';


/**
 * Creates an Search
 *
 * @class
 */

class Search extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this._setIcons();
  }

  hideClearIcon() {
    this._findDOMEl('.hig__global-nav__side-nav__search__clear', this.el).classList.remove('hig__global-nav__side-nav__search__clear--show');
  }

  onClearIconClick(fn) {
    return this._attachListener('click', '.hig__global-nav__side-nav__search__clear', this.el, fn);
  }

  onFocusIn(fn) {
    return this._attachListener('focusin', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  onFocusOut(fn) {
    return this._attachListener('focusout', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  onInput(fn) {
    return this._attachListener('input', '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
  }

  setPlaceholder(placeholder) {
    this._findDOMEl('.hig__global-nav__side-nav__search__inputholder__input', this.el).setAttribute('placeholder', placeholder);
  }

  setValue(value) {
    this._findDOMEl('.hig__global-nav__side-nav__search__inputholder__input', this.el).value = value;
  }

  showClearIcon() {
    this._findDOMEl('.hig__global-nav__side-nav__search__clear', this.el).classList.add('hig__global-nav__side-nav__search__clear--show');
  }

  _setIcons() {
    const mountSearchIcon = this._findDOMEl('.hig__global-nav__side-nav__search__icon', this.el);
    this._findOrCreateIconComponent(mountSearchIcon, 'search').setNameOrSVG('search', '16');

    const mountClearIcon = this._findDOMEl('.hig__global-nav__side-nav__search__clear', this.el);
    this._findOrCreateIconComponent(mountClearIcon, 'clear').setNameOrSVG('close-small');
  }

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
  }
}

Search._interface = Interface.components.GlobalNav.partials.SideNav.partials.Search;
Search._defaults = {
  value: '',
  placeholder: 'Search'
};
Search._partials = {};

export default Search;
