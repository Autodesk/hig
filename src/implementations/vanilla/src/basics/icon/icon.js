import "./icon.scss";

const Template = require("./button.html");
const Interface = require("interface.json");
const Core = require("../../helpers/js/_core.js");
var Icons = require("./icons/icons.js");

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

  setNameOrSVG(icon) {
    const iconString = Icons[icon];

    if (!iconString) {
      if (/^<svg>/.text(icon)) {
        iconString = icon;
      } else {
        console.warn("NO HIG ICON: " + iconString);
        return;
      }
    } 

    this.el.appenChild(iconString);
  }
}

Icon._interface  = Interface.
