import Interface from 'interface.json';
import Core from '_core.js';
import './text-cell.scss';
import Template from './text-cell.html';
import TextCellContent from '../text-cell-content/text-cell-content';

const AvailableAlignments = ['left', 'right', 'center'];

class TextCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tr');
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.textCellContent = new TextCellContent(this.initialOptions);
    this.mountPartialToComment('TEXT-CELL-CONTENT', this.textCellContent);
  }

  setText(text) {
    if (this.textCellContent) {
      this.textCellContent.setText(text);
    }
  }

  setDetail(detail) {
    if (this.textCellContent) {
      this.textCellContent.setDetail(detail);
    }
  }

  setAlignment(position) {
    if (this.textCellContent) {
      this.textCellContent.setAlignment(position);
    }
  }
}

TextCell._interface =
  Interface.components.Table.partials.TableRow.partials.TextCell;

TextCell._defaults = {};
TextCell._partials = {};
TextCell.AvailableAlignments = AvailableAlignments;

export default TextCell;
