import './grid.scss';

const Template = require('./grid.html');
var Interface = require('interface.json');
var Core = require('_core.js');

var GridItem = require('./grid-item/grid-item.js');

/**
 * Creates a Grid
 *
 * @class
 */

class Grid extends Core {

  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addGridItem(gridItem){
    this.mountPartialToComment('GRIDITEM', gridItem);
  }

}

Grid._interface = Interface['basics']['Grid'];
Grid._defaults = {};
Grid._partials = {
  GridItem: GridItem
}

module.exports = Grid;