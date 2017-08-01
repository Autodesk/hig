import './spacing.scss';

// var Template = require('./spacing.html');
var Interface = require('../../../interface/interface.json');
var Core = require('../../helpers/js/_core.js');

var sizes = {
  XXS: 4,
  XS: 8,
  S: 12,
  M: 16,
  L: 24,
  XL: 32,
  XXL: 64
};

/**
 * Creates a Spacing
 *
 * @class
 */

class Spacing extends Core {}

Spacing._interface = Interface['basics']['Spacing'];
Spacing._defaults = {};

Spacing.AvailableSizes = Object.keys(sizes);

module.exports = Spacing;
