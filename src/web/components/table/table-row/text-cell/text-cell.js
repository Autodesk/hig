import "./text-cell.scss";

var Template = require("./text-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class TextCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
  }

  setText() {
    console.log("setText");
  }

  setAlign() {
    console.log("setAlign");
	}
	
	setWidth() {
    console.log("setWidth");
  }
}

TextCell._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"][
    "TextCell"
  ];
TextCell._defaults = {};

module.exports = TextCell;
