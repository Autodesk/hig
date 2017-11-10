import Interface from 'interface.json';
import Core from '_core.js';
import './table-row.scss';
import Template from './table-row.html';
import TextCell from './text-cell/text-cell.js';
import SlotCell from './slot-cell/slot-cell.js';
import IconCell from './icon-cell/icon-cell.js';

/**
 * Creates an Table
 *
 * @class
 */

class TableRow extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tbody');
  }

  addCell(cellInstance) {
    if (
      cellInstance instanceof IconCell ||
      cellInstance instanceof TextCell ||
      cellInstance instanceof SlotCell
    ) {
      this.mountPartialToComment('BODY-CELL', cellInstance);
    }
  }

  select() {
    this.el.classList.add('hig__table__row--selected');
  }

  deselect() {
    this.el.classList.remove('hig__table__row--selected');
  }
}

TableRow._interface = Interface.components.Table.partials.TableRow;
TableRow._defaults = {};
TableRow._partials = {
  TextCell,
  SlotCell,
  IconCell
};

export default TableRow;
