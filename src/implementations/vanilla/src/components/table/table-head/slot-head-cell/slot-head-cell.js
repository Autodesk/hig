var Template = require("./slot-head-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var frToPercentage = require("../../../../helpers/js/_frtopercentage.js");

/**
 * Creates an Table
 *
 * @class
 */

class SlotHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.width) {
      this.setWidth(this.initialOptions.width);
    }
  }

  addSlot(slotElement) {
    this._el.appendChild(slotElement);
  }

  setWidth(width) {
    this.el.style.width = frToPercentage(width);
  }
}

SlotHeadCell._interface =
  Interface["components"]["Table"]["partials"]["TableHead"]["partials"][
    "SlotHeadCell"
  ];
SlotHeadCell._defaults = {
  width: "1fr"
};

module.exports = SlotHeadCell;
