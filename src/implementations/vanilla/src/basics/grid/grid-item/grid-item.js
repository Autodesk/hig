const Template = require('./grid-item.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const AvailableFractions = [
  'one-whole',
  'one-half',
  'one-quarter',
  'two-quarters',
  'three-quarters',
  'one-eighth',
  'two-eighths',
  'three-eighths',
  'four-eighths',
  'five-eighths',
  'six-eighths',
  'seven-eighths',
  'one-twelfth',
  'two-twelfths',
  'three-twelfths',
  'four-twelfths',
  'five-twelfths',
  'six-twelfths',
  'seven-twelfths',
  'eight-twelfths',
  'nine-twelfths',
  'ten-twelfths',
  'eleven-twelfths'
];

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

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }

  setFraction(fraction) {
    this.el.classList = '';
    this.el.classList.add('hig__grid__item', `hig__grid__item--${fraction}`);
  }
}


GridItem._interface = Interface.basics.Grid.partials.GridItem;
GridItem._defaults = {
  fraction: 'one-whole'
};

GridItem.AvailableFractions = AvailableFractions;

module.exports = GridItem;
