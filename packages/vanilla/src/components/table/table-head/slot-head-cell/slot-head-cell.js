import Interface from 'interface.json';
import Core from '_core.js';
import frToPercentage from 'helpers/js/_frtopercentage';
import Template from './slot-head-cell.html';
import './slot-head-cell.scss';

/**
 * Creates an Table
 *
 * @class
 */

class SlotHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tr');
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.width) {
      this.setWidth(this.initialOptions.width);
    }
  }

  addSlot(slotElement) {
    this._el.appendChild(slotElement);
  }

  setWidth(width) {
    this.el.style.width = frToPercentage(width);
  }
}

SlotHeadCell._interface =
  Interface.components.Table.partials.TableHead.partials.SlotHeadCell;
SlotHeadCell._defaults = {
  width: '1fr'
};

export default SlotHeadCell;
