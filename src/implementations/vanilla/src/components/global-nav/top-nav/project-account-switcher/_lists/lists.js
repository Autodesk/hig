var Template = require("./lists.html");
var Interface = require("interface.json");
var Core = require("_core.js");

var List = require("./_list/_list.js");

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

  addProject(newInstance, referenceInstance) {
    if (!this.projectList) {
      this.projectList = new List();
      this.mountPartialToComment("PROJECTS", this.projectList);
      if (this.options.projectTitle) {
        this.projectTitle = this.projectList.addTitle(
          this.options.projectTitle
        );
      }
    }
    this.projectList.addItem(newInstance, referenceInstance);
  }

  addAccount(newInstance, referenceInstance) {
    if (!this.accountList) {
      this.accountList = new List();
      this.mountPartialToComment("ACCOUNTS", this.accountList);
      if (this.options.accountTitle) {
        this.accountTitle = this.accountList.addTitle(
          this.options.accountTitle
        );
      }
    }
    this.accountList.addItem(newInstance, referenceInstance);
  }

  setProjectTitle(title) {
    this.projectTitle.setTitle(title);
  }

  setAccountTitle(title) {
    this.accountTitle.setTitle(title);
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
  projectTitle: "",
  accountTitle: ""
};
Lists._partials = {};

module.exports = Lists;
