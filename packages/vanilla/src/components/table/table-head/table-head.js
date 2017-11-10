import Interface from 'interface.json';
import Core from '_core.js';
import './table-head.scss';
import Template from './table-head.html';
import TextHeadCell from './text-head-cell/text-head-cell.js';
import SlotHeadCell from './slot-head-cell/slot-head-cell.js';

/**
 * Creates an Table
 *
 * @class
 */

class TableHead extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'table');
  }

  addCell(cellInstance) {
    if (cellInstance instanceof TextHeadCell || cellInstance instanceof SlotHeadCell) {
      this.mountPartialToComment('HEADCELL', cellInstance);
    }
  }
}

TableHead._interface = Interface.components.Table.partials.TableHead;
TableHead._defaults = {};
TableHead._partials = {
  TextHeadCell,
  SlotHeadCell
};


export default TableHead;
