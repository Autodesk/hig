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

  addSlot() {
    console.log("addSlot");
  }

  setWidth() {
    console.log("setWidth");
  }
}

SlotHeadCell._interface = Interface["components"]["Table"]["partials"]["TableHead"]["partials"]["SlotHeadCell"];
SlotHeadCell._defaults = {};

module.exports = SlotHeadCell;

