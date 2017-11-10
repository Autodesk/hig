import './grid.scss';

const Template = require('./grid.html');
const Core = require('_core.js');

const GridItem = require('./grid-item/grid-item.js');

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

  addGridItem(gridItem) {
    this.mountPartialToComment('GRIDITEM', gridItem);
  }
}

Grid._defaults = {};
Grid._partials = {
  GridItem
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Grid._interface = Interface.basics.Grid;
}

module.exports = Grid;
