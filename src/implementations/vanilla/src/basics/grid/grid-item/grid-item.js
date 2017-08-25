const Template = require('./grid-item.html');
var Interface = require('interface.json');
var Core = require('_core.js');

/**
 * Creates a GridItem
 *
 * @class
 */

class GridItem extends Core {

  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addSlot(slotElement){
    this.mountPartialToComment('SLOT', slotElement);
  }

  setFraction(fraction){
    this.el.classList = "";
    this.el.classList.add("hig__grid__item", "hig__grid__item--"+fraction);
  }

}


GridItem._interface = Interface['basics']['Grid']['partials']['GridItem'];
GridItem._defaults = {
  "fraction": "one-whole"
};

module.exports = GridItem;