import Interface from 'interface.json';
import Core from '_core.js';
import Flyout from 'basics/flyout/flyout';
import Project
  from 'components/global-nav/top-nav/project-account-switcher/project/project';
import Account
  from 'components/global-nav/top-nav/project-account-switcher/account/account';
import Lists
  from 'components/global-nav/top-nav/project-account-switcher/_lists/lists';
import Target
  from 'components/global-nav/top-nav/project-account-switcher/_target/target';
import Template from './project-account-switcher.html';
import './project-account-switcher.scss';

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

export default ProjectAccountSwitcher;
