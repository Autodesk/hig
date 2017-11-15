import Interface from 'interface.json';
import Item from '../_item/item';

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

Project._interface = Interface.components.GlobalNav.partials.TopNav.partials.ProjectAccountSwitcher.partials.Project;
Project._defaults = {
  image: '',
  'label': '',
};

export default Project;
