import './project-account-switcher.scss';

let Template = require('./project-account-switcher.html');
let Interface = require('interface.json');
let Core = require('_core.js');

let Button = require('../../../button/button.js');
let Flyout = require('../../../../basics/flyout/flyout.js');
let Project = require('./project/project.js');
let Account = require('./account/account.js');
let Lists = require('./_lists/lists.js');
let Target = require('./_target/target.js');

/**
 * Creates an ProjectAccountSwitcher
 *
 * @class
 */

class ProjectAccountSwitcher extends Core {
  constructor(options) {
    super(options);

    this.flyout = new Flyout();
    this.target = new Target({
      label: options.activeLabel,
      image: options.activeImage,
      _type: options.activeType
    });
    this.flyoutContent = new Lists({
      projectTitle: options.projectTitle,
      accountTitle: options.accountTitle
    });

    this._render(Template, options);
  }

  _componentDidMount() {
    this.mountPartialToComment('FLYOUT', this.flyout);
    this.flyout.addTarget(this.target);
    this.flyout.addSlot(this.flyoutContent);
  }

  addProject(newInstance, referenceInstance) {
    this.flyoutContent.addProject(newInstance, referenceInstance);
  }

  addAccount(newInstance, referenceInstance) {
    this.flyoutContent.addAccount(newInstance, referenceInstance);
  }

  onClick(fn) {
    return this.target.onClick(fn);
  }

  showCaret() {
    this.target.addCaret();
  }

  hideCaret() {
    this.target.removeCaret();
  }

  open() {
    this.flyout.open();
  }

  close() {
    this.flyout.close();
  }

  onClickOutside(fn) {
    return this.flyout.onClickOutside(fn);
  }

  setActiveLabel(label) {
    this.target.setLabel(label);
  }

  setActiveImage(imageUrl) {
    this.target.setImage(imageUrl);
  }

  setActiveType(type) {
    this.target.setType(type);
  }

  setProjectTitle(title) {
    this.flyoutContent.setProjectTitle(title);
  }

  setAccountTitle(title) {
    this.flyoutContent.setAccountTitle(title);
  }
}

ProjectAccountSwitcher._interface =
  Interface.components.GlobalNav.partials.TopNav.partials.ProjectAccountSwitcher;
ProjectAccountSwitcher._defaults = {
  activeImage: '',
  activeLabel: '',
  activeType: 'project',
  projectTitle: '',
  accountTitle: ''
};
ProjectAccountSwitcher._partials = {
  Account,
  Project
};

module.exports = ProjectAccountSwitcher;
