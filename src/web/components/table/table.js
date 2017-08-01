import "./table.scss";

var Template = require("./table.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var TableHead = require('./table-head/table-head.js');

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

		addTableRow() {
			console.log('table row')
		}		
}

Table._interface = Interface["components"]["Table"];
Table._defaults = {};
Table._partials = {
	TableHead: TableHead
}

module.exports = Table;
