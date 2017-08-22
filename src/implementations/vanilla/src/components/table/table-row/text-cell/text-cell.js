import './text-cell.scss'
var Template = require("./text-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var AvailablePositions = ["left", "right", "center"];

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

  setText(text) {
    this._findDOMEl(".hig__table__text-cell-text", this.el).textContent = text;
  }

  setDetail(detail) {
    this._findDOMEl(".hig__table__text-cell-detail", this.el).textContent = detail;
  }

  setAlignment(position) {
    if (AvailablePositions.indexOf(position) > -1) {
      this.el.style.textAlign = position;
    }
  }
}

TextCell._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"][
    "TextCell"
  ];
TextCell._defaults = {
  "text": "",
  "alignment": "",
  "detail": ""
};

module.exports = TextCell;
  