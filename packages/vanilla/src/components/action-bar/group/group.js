import Interface from 'interface.json';
import Core from '_core.js';
import Template from './group.html';

/**
 * Creates a Group
 *
 * @class
 */
class Group extends Core {
  constructor(options) {
    super(options);
    this.options = options || {};
    this._render(Template, options);
  }

  _componentDidMount() {}

  addAction(action) {}
}

Group._interface = Interface.components.ActionBar.partials.Group;
Group._defaults = {};
Group._partials = {};

export default Group;
