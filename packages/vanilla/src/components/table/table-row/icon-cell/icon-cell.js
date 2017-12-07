import Interface from 'interface.json';
import Core from '_core.js';
import './icon-cell.scss';
import Template from './icon-cell.html';
import Icon from 'basics/icon/icon.js';

/**
 * Creates an Table
 *
 * @class
 */

class IconCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, 'tr');
    this.initialOptions = options;
  }

  _componentDidMount() {
    if (this.initialOptions.icon) {
      this.setIcon(this.initialOptions.icon);
    }
  }

  setIcon(icon) {
    if (icon && icon.length > 0) {
      this._findOrCreateIconComponent(this._el).setNameOrSVG(icon);
    }
  }

  _findOrCreateIconComponent(mountElOrSelector, name = 'icon') {
    if (this[name]) {
      return this[name];
    }
    this[name] = new Icon({});
    this[name].mount(mountElOrSelector);
    return this[name];
  }
}

IconCell._interface =
  Interface.components.Table.partials.TableRow.partials.IconCell;
IconCell._defaults = {
  icon: false,
};

export default IconCell;
