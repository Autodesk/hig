import "./text-head-cell.scss";

var Template = require("./text-head-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var AvailablePositions = ["left", "right", "center"];


/**
 * Creates an Table
 *
 * @class
 */

class TextHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
	}
	
	setText(){
		this._findDomEl()
		
	}

	setAlign(){
		console.log("setAlign")
	}

	setWidth(){
		console.log("setWidth")
	}
}

TextHeadCell._interface =
  Interface["components"]["Table"]["partials"]["TableHead"]["partials"]["TextHeadCell"];
TextHeadCell._defaults = {};

module.exports = TextHeadCell;
