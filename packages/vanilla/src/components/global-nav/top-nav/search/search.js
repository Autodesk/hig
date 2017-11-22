import Interface from 'interface.json';
import Core from '_core.js';
import './search.scss';
import Template from './search.html';
import Icon from '../../../../basics/icon/icon';
import Option from '../../../../basics/form-elements/option/option';

const OPEN_CLASS = 'hig__option__list--show';
/**
 * Creates an Search
 *
 * @class
 */

class Search extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);

    this.initialOptions = options;
  }

  _componentDidMount() {
    this._setIcons();
  }

  addOption(option, referenceOption) {
    console.log('add option');
    if (option instanceof Option) {
      const optionWrapper = this._findDOMEl(
        '.hig__option__list',
        this.el
      );
      option.mount(optionWrapper);
    }
  }

  setPlaceholder(placeholder) {
    this._findDOMEl(
      '.hig__global-nav__top-nav__search__input',
      this.el
    ).setAttribute('placeholder', placeholder);
  }

  setQuery(query) {
    this._findDOMEl(
      '.hig__global-nav__top-nav__search__input',
      this.el
    ).value = query;
  }

  showClearIcon() {
    this._findDOMEl(
      '.hig__global-nav__top-nav__search__clear',
      this.el
    ).classList.add('hig__global-nav__top-nav__search__clear--show');
  }

  hideClearIcon() {
    this._findDOMEl(
      '.hig__global-nav__top-nav__search__clear',
      this.el
    ).classList.remove('hig__global-nav__top-nav__search__clear--show');
  }

  onClearIconClick(fn) {
    return this._attachListener(
      'click',
      '.hig__global-nav__top-nav__search__clear',
      this.el,
      fn
    );
  }

  onInput(fn) {
    return this._attachListener(
      'input',
      '.hig__global-nav__top-nav__search__input',
      this.el,
      fn
    );
  }

  onFocusIn(fn) {
    return this._attachListener(
      'focusin',
      '.hig__global-nav__top-nav__search__input',
      this.el,
      fn
    );
  }

  onFocusOut(fn) {
    return this._attachListener(
      'focusout',
      '.hig__global-nav__top-nav__search__input',
      this.el,
      fn
    );
  }

  showOptions() {
    this._findDOMEl('.hig__option__list', this.el).classList.add(OPEN_CLASS);
  }

  hideOptions() {
    this._findDOMEl('.hig__option__list', this.el).classList.remove(OPEN_CLASS);
  }

  _setIcons() {
    const mountSearchIcon = this._findDOMEl(
      '.hig__global-nav__top-nav__search__icon',
      this.el
    );
    this._findOrCreateIconComponent(mountSearchIcon, 'search').setNameOrSVG('search');

    const mountClearIcon = this._findDOMEl(
      '.hig__global-nav__top-nav__search__clear',
      this.el
    );
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

Search._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.Search;
Search._defaults = {
  query: '',
  placeholder: 'Search'
};
Search._partials = {};

export default Search;
