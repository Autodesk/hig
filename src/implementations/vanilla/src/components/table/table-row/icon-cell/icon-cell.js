import "./icon-cell.scss";

var Template = require("./icon-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class IconCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
    this.initialOptions = options;
  }

  _componentDidMount(){
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  setIcon(icon) {
    if (icon && icon.length > 0) {
      this._el.innerHTML = this._getIconString(icon);
    }
  }
}

IconCell._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"][
    "IconCell"
  ];
IconCell._defaults = {
  icon: false
};

module.exports = IconCell;
