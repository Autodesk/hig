import "./slot-head-cell.scss";

var Template = require("./slot-head-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class SlotHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
  }

  addSlot(slotElement) {
		this._el.appendChild(slotElement);
  }

  setWidth(width) {
    if (width.endsWith("fr")) {
      var value = width.split("fr", 1);
      var percentWidth = value[0] * 100;
      this.el.style.width = `${percentWidth}%`;
    } else {
      this.el.style.width = width;
    }
  }  
}

SlotHeadCell._interface = Interface["components"]["Table"]["partials"]["TableHead"]["partials"]["SlotHeadCell"];
SlotHeadCell._defaults = {};

module.exports = SlotHeadCell;


