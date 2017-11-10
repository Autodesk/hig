import Interface from 'interface.json';
import Core from '_core.js';
import Template from './lists.html';
import List from './_list/_list.js';

/**
 * Creates an Lists
 *
 * @class
 */

class Lists extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);

    // #TODO: NEED TO REFACTOR, THIS SHOULD LIVE ON THE REACT LAYER
    this.options = options;
    this.projectList = false;
    this.accountList = false;
    this.projectTitle = false;
    this.accountTitle = false;
  }

  _componentDidMount() {
    if (this.options.accountTitle) {
      this.setAccountTitle(this.options.accountTitle);
    }

    if (this.options.projectTitle) {
      this.setProjectTitle(this.options.projectTitle);
    }
  }

  addProject(newInstance, referenceInstance) {
    this._ensureProjectsList();
    this.projectList.addItem(newInstance, referenceInstance);
  }

  addAccount(newInstance, referenceInstance) {
    this._ensureAccountsList();
    this.accountList.addItem(newInstance, referenceInstance);
  }

  setProjectTitle(title) {
    if (this.projectTitle) {
      this.projectTitle.setTitle(title);
    } else {
      this._ensureProjectsList();
      this.projectTitle = this.projectList.addTitle(title);
    }
  }

  setAccountTitle(title) {
    if (this.accountTitle) {
      this.accountTitle.setTitle(title);
    } else {
      this._ensureAccountsList();
      this.accountTitle = this.accountList.addTitle(title);
    }
  }

  _ensureAccountsList() {
    if (this.accountList) { return; }

    this.accountList = new List();
    this.mountPartialToComment('ACCOUNTS', this.accountList);
  }

  _ensureProjectsList() {
    if (this.projectList) { return; }

    this.projectList = new List();
    this.mountPartialToComment('PROJECTS', this.projectList);
  }
}

// HACKY HACKY HACKY :(
Lists._interface = {
  methods: {
    addAccount: {},
    addProject: {},
    setProjectTitle: {},
    setAccountTitle: {}
  }
};
Lists._defaults = {
  projectTitle: '',
  accountTitle: ''
};
Lists._partials = {};

export default Lists;
