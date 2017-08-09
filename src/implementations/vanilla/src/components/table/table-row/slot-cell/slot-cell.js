import "./slot-cell.scss";

var Template = require("./slot-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class SlotCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
  }

  addSlot(slotElement) {
    this._el.appendChild(slotElement)
  }
}

SlotCell._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"][
    "SlotCell"
  ];
SlotCell._defaults = {}

module.exports = SlotCell;
