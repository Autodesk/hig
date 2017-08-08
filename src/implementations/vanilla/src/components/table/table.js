import "./table.scss";

var Template = require("./table.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var TableHead = require('./table-head/table-head.js');
var TableRow = require("./table-row/table-row.js");

/**
 * Creates an Table
 *
 * @class
 */

class Table extends Core {
    constructor(options = {}){
      super(options);
      this._render(Template, options);
    }

    addTableHead(tableHeadInstance) {
        if (tableHeadInstance instanceof TableHead) {
          this.mountPartialToComment('TABLE-HEAD', tableHeadInstance);
        }
    }

    addTableRow(tableRowInstance) {
        if ( tableRowInstance instanceof TableRow) {
          this.mountPartialToComment("TABLE-ROW", tableRowInstance);
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
