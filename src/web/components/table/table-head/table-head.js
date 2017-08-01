import "./table-head.scss";

var Template = require("./table-head.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class TableHead extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'thead');
  }

  addCell(cellInstance) {
    // if (cellInstance instanceof TextHeadCell || cellInstance instanceof SlotHeadCell) {
    //   this.mountPartialToComment("HEADCELL", cellInstance);
		// }
		console.log('add cell')
  }
}

TableHead._interface = Interface["components"]["Table"]["partials"]["TableHead"];
TableHead._defaults = {}


module.exports = TableHead;
