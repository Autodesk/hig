import Interface from 'interface.json';
import Core from '_core.js';
import './expanding-filter-section.scss';
import Template from './expanding-filter-section.html';
import Icon from '../../basics/icon/icon';

class ExpandingFilterSection extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this._addCaretIcon();
  }

  close() {
    this.el.classList.remove('hig__expanding-filter-section--open');
    this.el.removeAttribute('open');
  }

  onClick(fn) {
    return this._attachListener(
      'click',
      '.hig__expanding-filter-section__label',
      this.el,
      fn
    );
  }

  open() {
    this.el.classList.add('hig__expanding-filter-section--open');
    this.el.setAttribute('open', true);
  }

  setLabel(label) {
    this.el.querySelector(
      '.hig__expanding-filter-section__label'
    ).innerText = label;
  }

  addSlot(content) {
    this.el
      .querySelector('.hig__expanding-filter-section__content')
      .appendChild(content);
  }

  _addCaretIcon() {
    const mountEl = this._findDOMEl(
      '.hig__expanding-filter-section__caret',
      this.el
    );
    const icon = new Icon({ nameOrSVG: 'caret' });
    icon.mount(mountEl);
  }
}

ExpandingFilterSection._interface = Interface.components.ExpandingFilterSection;
ExpandingFilterSection._defaults = {};
ExpandingFilterSection._partials = {};

export default ExpandingFilterSection;
