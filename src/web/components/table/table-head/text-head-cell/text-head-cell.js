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
	
	setText(text){
		this.el.textContent = text;	this.el.textContent = text;
	}

	setAlign(position){
		if(AvailablePositions.indexOf(position) > -1) {
			this.el.style.textAlign = position
		};
	}

	setWidth(width){
		if (width.endsWith('fr')) {
			var value = width.split('fr', 1)
			var percentWidth = value[0] * 100;
			this.el.style.width = `${percentWidth}%`;
		} else {
			this.el.style.width = width ;
		}
	}
}

TextHeadCell._interface =
  Interface["components"]["Table"]["partials"]["TableHead"]["partials"]["TextHeadCell"];
TextHeadCell._defaults = {};

module.exports = TextHeadCell;
