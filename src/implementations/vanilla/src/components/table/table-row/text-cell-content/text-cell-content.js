import './text-cell-content.scss'
var Template = require("./text-cell-content.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var AvailablePositions = ["left", "right", "center"];

/**
 * Creates an Table
 *
 * @class
 */

class TextCellContent extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined);
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

TextCellContent._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"]["TextCellContent"];

TextCellContent._defaults = {
  "text": "",
  "alignment": "",
  "detail": ""
};

module.exports = TextCellContent;
  