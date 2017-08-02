import "./table-row.scss";

var Template = require("./table-row.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var TextCell = require("./text-cell/text-cell.js");
var SlotCell = require("./slot-cell/slot-cell.js");
var IconCell = require("./icon-cell/icon-cell.js");

/**
 * Creates an Table
 *
 * @class
 */

class TableRow extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tbody");
	}
	
	addCell(cellInstance){
		if (cellInstance instanceof IconCell || cellInstance instanceof TextCell || cellInstance instanceof SlotCell) {
      this.mountPartialToComment("BODY-CELL", cellInstance);
    }
	}
}

TableRow._interface =
  Interface["components"]["Table"]["partials"]["TableRow"];
TableRow._defaults = {};
TableRow._partials = {
	TextCell: TextCell,
	SlotCell: SlotCell,
	IconCell: IconCell,
};

module.exports = TableRow;
