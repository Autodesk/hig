import Interface from 'interface.json';
import Core from '_core.js';
import './table.scss';
import Template from './table.html';
import TableHead from './table-head/table-head';
import TableRow from './table-row/table-row';

let AvailableDensities = ['standard', 'compressed', 'large'];

/**
 * Creates an Table
 *
 * @class
 */

class Table extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options);
  }

  addTableHead(tableHeadInstance) {
    if (tableHeadInstance instanceof TableHead) {
      this.mountPartialToComment('TABLE-HEAD', tableHeadInstance);
    }
  }

  addTableRow(tableRowInstance) {
    if (tableRowInstance instanceof TableRow) {
      this.mountPartialToComment('TABLE-ROW', tableRowInstance);
    }
  }

  setDensity(density) {
    if (AvailableDensities.indexOf(density) > -1) {
      this._clearAllDensities();
      this.el.classList.add('hig__table--' + density);
    }
  }

  _clearAllDensities() {
    for (let density in AvailableDensities) {
      this.el.classList.remove('hig__table-' + density);
    }
  }
}

Table._interface = Interface.components.Table;
Table._defaults = {};
Table._partials = {
  TableHead,
  TableRow
};

Table.AvailableDensities = AvailableDensities;

export default Table;
