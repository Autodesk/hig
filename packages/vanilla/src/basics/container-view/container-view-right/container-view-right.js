import Core from '_core.js';
import './container-view-right.scss';
import Template from './container-view-right.html';

/**
* Exports class for ContainerViewRight
*
*/

class ContainerViewRight extends Core {
  contructor(options = {}) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  open() {
    this.el.classList.add('hig__container__view-right--show');
  }

  hide() {
    this.el.classList.remove('hig__container__view-right--show');
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }
}


export default ContainerViewRight;
