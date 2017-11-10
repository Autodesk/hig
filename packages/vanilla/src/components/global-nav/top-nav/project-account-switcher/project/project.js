const Item = require('../_item/item.js');

/**
 * Creates an Project
 *
 * @class
 */

class Project {
  constructor(options) {
    options._type = 'project';
    return new Item(options);
  }
}

Project._defaults = {
  image: '',
  label: '',
};

if (process.env.NODE_ENV !== 'production') {
  const Interface = require('interface.json');
  Project._interface = Interface.components.GlobalNav.partials.TopNav.partials.ProjectAccountSwitcher.partials.Project;
}

module.exports = Project;
