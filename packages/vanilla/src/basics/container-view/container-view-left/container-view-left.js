import Interface from 'interface.json';
import Core from '_core.js';
import './container-view-left.scss';
import Template from './container-view-left.html';

/**
* Exports class for ContainerViewLeft
*
*/

class ContainerViewLeft extends Core {
  constructor(options = {}) {
    super();
    this._render(Template, options);
    this.initialOptions = options;
  }

  open() {
    this.el.classList.add('hig__container__view-left--open');
  }

  close() {
    this.el.classList.remove('hig__container__view-left--open');
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }
}

ContainerViewLeft._interface = Interface.basics.ContainerViewLeft;
ContainerViewLeft._defaults = {
};
ContainerViewLeft._partials = {};
export default ContainerViewLeft;
