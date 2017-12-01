import Core from '_core.js';
import './container-view-left.scss';
import Template from './container-view-left.html';

/**
* Exports class for ContainerViewLeft
*
*/

class ContainerViewLeft extends Core {
  contructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  open() {
    this.el.classList.add('hig__container__view-left--show');
  }

  hide() {
    this.el.classList.remove('hig__container__view-left--show');
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }
}


export default ContainerViewLeft;
