import "./icon.scss";

const Template = require("./icon.html");
const Interface = require("interface.json");
const Core = require("../../helpers/js/_core.js");
var Icons = require("../icons/icons.js");

/**
 * Creates an icon
 *
 * @class
 */

class Icon extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.nameOrSVG) {
      this.setNameOrSVG(this.initialOptions.nameOrSVG);
    }
  }

  setNameOrSVG(icon, size="") {
    var iconString = size === "16" 
      ? this._confirmNameOrSVG(icon + '-16') 
      : this._confirmNameOrSVG(icon);

    this._el.innerHTML = iconString;
  }

  _confirmNameOrSVG(icon) {
    var isNamedIcon = Icons[icon];
    var isSVG = /^<svg/.test(icon);

    if (isNamedIcon) {
      return isNamedIcon;
    } else if (isSVG) {
      return icon;
    } else {
      console.warn("NO HIG ICON: " + icon);
      return;
    }
  }
}

Icon._interface = Interface["basics"]["Icon"];
Icon._defaults = {
  nameOrSVG: ""
};

module.exports = Icon;
