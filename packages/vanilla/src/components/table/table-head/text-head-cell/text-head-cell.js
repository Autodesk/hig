import Interface from 'interface.json';
import Core from '_core.js';
import './text-head-cell.scss';
import Template from './text-head-cell.html';
import frToPercentage from 'helpers/js/_frtopercentage';

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

export default TextHeadCell;
