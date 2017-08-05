
var Template = require("./text-head-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var AvailablePositions = ["left", "right", "center"];


/**
 * Creates an Table
 *
 * @class
 */

class TextHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
    this.initialOptions = options;
  }

  _componentDidMount(){
    if(this.initialOptions.width){
      this.setWidth(this.initialOptions.width);
    }
  }

  setText(text){
    this.el.textContent = text;
  }

  setAlignment(position){
    if(AvailablePositions.indexOf(position) > -1) {
      this.el.style.textAlign = position
    };
  }

  setWidth(width){
    this.el.style.width = this._frToPercentage(width);
  }
}

TextHeadCell._interface =
  Interface["components"]["Table"]["partials"]["TableHead"]["partials"]["TextHeadCell"];
TextHeadCell._defaults = {
  text: "",
  alignment: "",
  width: ""
};

module.exports = TextHeadCell;
