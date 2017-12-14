import Interface from 'interface.json';
import Core from '_core.js';
import TextHeadCell from 'components/table/table-head/text-head-cell/text-head-cell';
import SlotHeadCell from 'components/table/table-head/slot-head-cell/slot-head-cell';
import Template from './table-head.html';
import './table-head.scss';

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
