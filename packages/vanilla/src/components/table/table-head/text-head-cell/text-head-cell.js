import './text-head-cell.scss';

const Template = require('./text-head-cell.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const frToPercentage = require('../../../../helpers/js/_frtopercentage.js');

const AvailableAlignments = ['left', 'right', 'center'];


/**
 * Creates an Table
 *
 * @class
 */

class TextHeadCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tr');
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.width) {
      this.setWidth(this.initialOptions.width);
    }
  }

  setText(text) {
    this.el.textContent = text;
  }

  setAlignment(alignment) {
    if (AvailableAlignments.indexOf(alignment) > -1) {
      this.el.style.textAlign = alignment;
    }
  }

  setWidth(width) {
    this.el.style.width = frToPercentage(width);
  }
}

TextHeadCell._interface =
  Interface.components.Table.partials.TableHead.partials.TextHeadCell;
TextHeadCell._defaults = {
  text: '',
  alignment: '',
  width: '1fr'
};
TextHeadCell.AvailableAlignments = AvailableAlignments;

module.exports = TextHeadCell;
