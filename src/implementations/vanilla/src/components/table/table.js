import "./table.scss";

var Template = require("./table.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var TableHead = require('./table-head/table-head.js');
var TableRow = require("./table-row/table-row.js");

var AvailableDensities = ["standard", "compressed", "large"]

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
      this.mountPartialToComment("TABLE-HEAD", tableHeadInstance);
    }
  }

  addTableRow(tableRowInstance) {
    if (tableRowInstance instanceof TableRow) {
      this.mountPartialToComment("TABLE-ROW", tableRowInstance);
    }
  }

  setDensity(density) {
    if (AvailableDensities.indexOf(density) > -1) {
     this._clearAllDensities();
     this.el.classList.add("hig__table--" + density);
    }
  }

  _clearAllDensities() {
    for (var density in AvailableDensities) {
       this.el.classList.remove("hig__table-" + density);
    }
  }
}

Table._interface = Interface["components"]["Table"];
Table._defaults = {};
Table._partials = {
  TableHead: TableHead,
  TableRow: TableRow
}

module.exports = Table;
