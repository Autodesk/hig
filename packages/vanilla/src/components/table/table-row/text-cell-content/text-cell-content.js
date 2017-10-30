import './text-cell-content.scss';

const Template = require('./text-cell-content.html');
const Interface = require('interface.json');
const Core = require('_core.js');

const AvailableAlignments = ['left', 'right', 'center'];

/**
 * Creates an Table
 *
 * @class
 */

class TextCellContent extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined);
  }

  setText(text) {
    this._findDOMEl('.hig__table__text-cell-text', this.el).textContent = text;
  }

  setDetail(detail) {
    this._findDOMEl('.hig__table__text-cell-detail', this.el).textContent = detail;
  }

  setAlignment(alignment) {
    if (AvailableAlignments.indexOf(alignment) > -1) {
      this.el.style.textAlign = alignment;
    }
  }
}

TextCellContent._interface =
  Interface.components.Table.partials.TableRow.partials.TextCellContent;

TextCellContent._defaults = {
  text: '',
  alignment: '',
  detail: ''
};
TextCellContent.AvailableAlignments = AvailableAlignments;

module.exports = TextCellContent;
