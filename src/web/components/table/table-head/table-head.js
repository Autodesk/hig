import "./table-head.scss";

var Template = require("./table-head.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var TextHeadCell = require("./text-head-cell/text-head-cell.js");
var SlotHeadCell = require("./slot-head-cell/slot-head-cell.js");

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
      this.mountPartialToComment("HEADCELL", cellInstance);
    }
  }
}

TableHead._interface = Interface["components"]["Table"]["partials"]["TableHead"];
TableHead._defaults = {};
TableHead._partials = {
  TextHeadCell: TextHeadCell,
  SlotHeadCell: SlotHeadCell
}



module.exports = TableHead;
