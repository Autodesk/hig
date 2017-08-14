import './grid.scss';

const Template = require('./grid.html');
var Interface = require('interface.json');
var Core = require('../../helpers/js/_core.js');

/**
 * Creates a Grid
 *
 * @class
 */

class Grid extends Core {

  constructor(options = {}) {
    super(options);
    this._render(Template, options);
  }

}


Grid._interface = Interface['basics']['Grid'];
Grid._defaults = {

};

module.exports = Grid;