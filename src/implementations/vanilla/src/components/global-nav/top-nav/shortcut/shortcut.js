import "./shortcut.scss";

var Template = require("./shortcut.html");
var Interface = require("interface.json");
var Core = require("_core.js");
const Icon = require("../../../../basics/icon/icon.js");

/**
 * Creates an Shortcut
 *
 * @class
 */

class Shortcut extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  onClick(fn) {
    return this._attachListener("click", this.el, this.el, fn);
  }

  setIcon(icon) {
    const mountedEl = this._findDOMEl(
      ".hig__global-nav__top-nav__shortcut__link__icon",
      this.el
    );
    this._findOrCreateIconComponent(mountedEl).setNameOrSVG(icon);
  }

  setTitle(title) {
    this.el.textContent = title;
    this.el.setAttribute("title", title);
  }

  setLink(link) {
    this.el.setAttribute("href", link);
  }

  _findOrCreateIconComponent(mountElOrSelector, name = "icon") {
    if (this[name]) {
      return this[name];
    } else {
      this[name] = new Icon({});
      this[name].mount(mountElOrSelector);
      return this[name];
    }
  }
}

Shortcut._interface =
  Interface["components"]["GlobalNav"]["partials"]["TopNav"]["partials"][
    "Shortcut"
  ];
Shortcut._defaults = {
  icon: "",
  title: "",
  link: "#"
};

module.exports = Shortcut;
