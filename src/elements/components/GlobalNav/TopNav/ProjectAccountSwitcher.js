/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as PropTypes from 'prop-types';
import HIGElement from '../../../HIGElement';
import HIGNodeList from '../../../HIGNodeList';
import HIGChildValidator from '../../../HIGChildValidator';
import createComponent from '../../../../adapters/createComponent';
import AccountComponent, { Account } from './Account';
import ProjectComponent, { Project } from './Project';

export class ProjectAccountSwitcher extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.accounts = new HIGNodeList({
      type: Account,
      HIGConstructor: this.hig.partials.Account,
      onAdd: (instance, beforeInstance) => {
        this.hig.addAccount(instance, beforeInstance);
      }
    });

    this.projects = new HIGNodeList({
      type: Project,
      HIGConstructor: this.hig.partials.Project,
      onAdd: (instance, beforeInstance) => {
        this.hig.addProject(instance, beforeInstance);
      }
    });

    [
      '_render',
      'openFlyout',
      'closeFlyout',
      'setActiveAccount',
      'setActiveProject'
    ].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });

    this.props = { ...initialProps };
    this.state = {};
  }

  componentDidMount() {
    this.accounts.componentDidMount();
    this.projects.componentDidMount();

    this.commitUpdate(this.props);
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    this.processUpdateProps(updatePayload)
      .mapToHIGFunctions({
        activeImage: 'setActiveImage',
        activeLabel: 'setActiveLabel',
        activeType: 'setActiveType'
      })
      .mapToHIGEventListeners(['onClick', 'onClickOutside'])
      .handle('open', value => {
        this.props.open = value;
      })
      .then(this._render);
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Project:
        return this.projects.createElement(ElementConstructor, props);
      case Account:
        return this.accounts.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (instance instanceof Account) {
      this.accounts.insertBefore(instance);
      if (this.state.activeAccount === undefined) {
        this.state.activeAccount = instance;
      }
    } else if (instance instanceof Project) {
      this.projects.insertBefore(instance);
      if (this.state.activeProject === undefined) {
        this.state.activeProject = instance;
      }
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance.constructor.name}`
      );
    }
  }

  openFlyout() {
    this.state.open = true;
    this._render();
  }

  closeFlyout() {
    this.state.open = false;
    this._render();
  }

  setActiveAccount(event, higElement) {
    this.state.activeAccount = this.accounts.find(a => a.hig === higElement);
    this._render();
  }

  setActiveProject(event, higElement) {
    this.state.activeProject = this.projects.find(p => p.hig === higElement);
    this._render();
  }

  _render() {
    let open = this.props.open;
    if (open === undefined) {
      open = this.state.open;
    }
    open ? this.hig.open() : this.hig.close();

    if (this.projects.length > 1 || this.accounts.length > 1) {
      this.hig.showCaret();
      this.configureHIGEventListener('onClick', this.openFlyout);
      this.configureHIGEventListener('onClickOutside', this.closeFlyout);
    } else {
      this.hig.hideCaret();
      this.configureHIGEventListener('onClick', undefined);
      this.configureHIGEventListener('onClickOutside', undefined);
    }

    this.accounts.forEach(account => {
      account.configureHIGEventListener('onClick', this.setActiveAccount);
      account === this.state.activeAccount
        ? account.hig.activate()
        : account.hig.deactivate();
    });
    this.projects.forEach(project => {
      project.configureHIGEventListener('onClick', this.setActiveProject);
      project === this.state.activeProject
        ? project.hig.activate()
        : project.hig.deactivate();
    });

    if (this.state.activeAccount && this.state.activeProject) {
      this.hig.setActiveLabel(
        this.props.activeLabel ||
          `${this.state.activeAccount.props.label} / ${this.state.activeProject.props.label}`
      );
      this.hig.setActiveImage(
        this.props.activeImage || this.state.activeProject.props.image
      );
      this.hig.setActiveType(this.props.activeType || 'project');
    } else if (this.state.activeAccount) {
      this.hig.setActiveLabel(
        this.props.activeLabel || this.state.activeAccount.props.label
      );
      this.hig.setActiveImage(
        this.props.activeImage || this.state.activeAccount.props.image
      );
      this.hig.setActiveType(this.props.activeType || 'account');
    } else if (this.state.activeProject) {
      this.hig.setActiveLabel(
        this.props.activeLabel || this.state.activeProject.props.label
      );
      this.hig.setActiveImage(
        this.props.activeImage || this.state.activeProject.props.image
      );
      this.hig.setActiveType(this.props.activeType || 'project');
    }
  }
}

const ProjectAccountSwitcherComponent = createComponent(ProjectAccountSwitcher);

ProjectAccountSwitcherComponent.propTypes = {
  open: PropTypes.bool,
  activeLabel: PropTypes.string,
  activeImage: PropTypes.string,
  activeType: PropTypes.string,
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  children: HIGChildValidator([AccountComponent, ProjectComponent])
};

ProjectAccountSwitcherComponent.__docgenInfo = {
  props: {
    open: {
      description: '{bool} opens the project/account switcher'
    },
    activeLabel: {
      description: 'sets {String} the label displayed in the top nav'
    },
    activeImage: {
      description: 'sets {String} the image displayed in the top nav'
    },
    activeType: {
      description: 'sets the {String} type of the item displayed in the top nav'
    },
    onClick: {
      description: '{func} calls the provided callback when user clicks on the switcher in the top nav'
    },
    onClickOutside: {
      description: '{func} calls the provided callback when the switcher is open and the user clicks outside the switcher'
    },
    children: {
      description: 'support adding Project and Account'
    }
  }
};

ProjectAccountSwitcherComponent.Account = AccountComponent;
ProjectAccountSwitcherComponent.Project = ProjectComponent;

export default ProjectAccountSwitcherComponent;
