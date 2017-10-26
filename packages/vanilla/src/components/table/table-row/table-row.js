import './table-row.scss';

const Template = require('./table-row.html');
const Core = require('_core.js');

const TextCell = require('./text-cell/text-cell.js');
const SlotCell = require('./slot-cell/slot-cell.js');
const IconCell = require('./icon-cell/icon-cell.js');

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

TableRow._defaults = {};
TableRow._partials = {
  TextCell,
  SlotCell,
  IconCell
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  TableRow._interface = Interface.components.Table.partials.TableRow;
}

module.exports = TableRow;
