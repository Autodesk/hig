import './help.scss';

const Core = require('_core.js');
const Template = require('./help.html');

const Flyout = require('basics/flyout/flyout.js');
const Shortcut = require('../shortcut/shortcut.js');
const Group = require('./group/group.js');
const Option = require('./option/option.js');

/**
 * Creates a Help
 *
 * @class
 */
class Help extends Core {
  constructor(options) {
    super(options);
    this.options = options || {};
    this._render(Template, options);
  }

  open() {
    this.flyout.open();
  }

  close() {
    this.flyout.close();
  }

  // bind the supplied fn to click events on this element.
  onClick(fn) {
    return this.shortcut.onClick(fn);
  }

  onClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  addGroup(group, referenceGroup) {
    if (group instanceof Group) {
      group.mount(this.el, referenceGroup);
      this.flyout.addSlot(group);
    }
  }

  setTitle(title) {
    this.shortcut.setTitle(title);
  }

  _componentDidMount() {
    this.flyout = new Flyout();
    this.mountPartialToComment('FLYOUT', this.flyout, this.el);
    this.shortcut = new Shortcut({
      icon: 'help',
      title: this.options.title
    });
    this.shortcut.mount(this.el);
    this.flyout.addTarget(this.shortcut);
  }
}

Help._defaults = {
  title: 'Help'
};
Help._partials = {
  Group,
  Option
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Help._interface = Interface.components.GlobalNav.partials.TopNav.partials.Help;
}

module.exports = Help;
