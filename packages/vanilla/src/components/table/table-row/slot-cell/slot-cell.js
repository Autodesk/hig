import Template from './slot-cell.html';
import Interface from 'interface.json';
import Core from '_core.js';

/**
 * Creates an Table
 *
 * @class
 */

class SlotCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tr');
  }

  addSlot(slotElement) {
    this._el.appendChild(slotElement);
  }
}

SlotCell._interface =
  Interface.components.Table.partials.TableRow.partials.SlotCell;
SlotCell._defaults = {};

export default SlotCell;
