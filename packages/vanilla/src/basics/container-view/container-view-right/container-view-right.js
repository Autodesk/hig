import Interface from 'interface.json';
import Core from '_core.js';
import './container-view-right.scss';
import Template from './container-view-right.html';

/**
* Exports class for ContainerViewRight
*
*/

class ContainerViewRight extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  open() {
    this.el.classList.add('hig__container__view-right--open');
  }

  close() {
    this.el.classList.remove('hig__container__view-right--open');
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }
}

ContainerViewRight._interface = Interface.basics.ContainerViewRight;
ContainerViewRight._defaults = {};
ContainerViewRight._partials = {};

export default ContainerViewRight;
