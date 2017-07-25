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
import HIGElement from '../elements/HIGElement';
import HIGNodeList from '../elements/HIGNodeList';
import HIGChildValidator from '../elements/HIGChildValidator';
import createComponent from './createComponent';
import AccountComponent, { AccountAdapter } from './AccountAdapter';
import ProjectComponent, { ProjectAdapter } from './ProjectAdapter';

export class ProjectAccountSwitcherAdapter extends HIGElement {
  constructor(HIGConstructor, initialProps) {
    super(HIGConstructor, initialProps);

    this.accounts = new HIGNodeList({
      type: AccountAdapter,
      HIGConstructor: this.hig.partials.Account,
      onAdd: (instance, beforeInstance) => {
        this.hig.addAccount(instance, beforeInstance);
      }
    });

    this.projects = new HIGNodeList({
      type: ProjectAdapter,
      HIGConstructor: this.hig.partials.Project,
      onAdd: (instance, beforeInstance) => {
        this.hig.addProject(instance, beforeInstance);
      }
    });
  }

  componentDidMount() {
    this.accounts.componentDidMount();
    this.projects.componentDidMount();

    if (this.initialProps.open === true) {
      this.hig.open();
    }
    if (this.initialProps.showCaret) {
      this.hig.showCaret();
    } else {
      this.hig.hideCaret();
    }

    this.commitUpdate(this.props);
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'open': {
          if (propValue) {
            this.hig.open();
          } else {
            this.hig.close();
          }
          break;
        }
        case 'showCaret': {
          if (propValue) {
            this.hig.showCaret();
          } else {
            this.hig.hideCaret();
          }
          break;
        }
        case 'activeLabel': {
          this.hig.setActiveLabel(propValue);
          break;
        }
        case 'activeType': {
          this.hig.setActiveType(propValue);
          break;
        }
        case 'activeImage': {
          this.hig.setActiveImage(propValue);
          break;
        }
        case 'onClickOutside': {
          const dispose = this._disposeFunctions.get('onClickOutsideDispose');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set(
            'onClickOutisdeDispose',
            this.hig.onClickOutside(propValue)
          );
          break;
        }
        case 'onClick': {
          const dispose = this._disposeFunctions.get('onClick');

          if (dispose) {
            dispose();
          }

          this._disposeFunctions.set('onClick', this.hig.onClick(propValue));
          break;
        }
        case 'children': {
          //no-op
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case ProjectAdapter:
        return this.projects.createElement(ElementConstructor, props);
      case AccountAdapter:
        return this.accounts.createElement(ElementConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  insertBefore(instance, beforeChild = {}) {
    if (instance instanceof AccountAdapter) {
      this.accounts.insertBefore(instance);
    } else if (instance instanceof ProjectAdapter) {
      this.projects.insertBefore(instance);
    } else {
      throw new Error(
        `${this.constructor.name} cannot have a child of type ${instance.constructor.name}`
      );
    }
  }
}

const ProjectAccountSwitcherComponent = createComponent(
  ProjectAccountSwitcherAdapter
);

ProjectAccountSwitcherComponent.propTypes = {
  open: PropTypes.bool,
  onAccountChange: PropTypes.func,
  onProjectChange: PropTypes.func,

  children: HIGChildValidator([AccountComponent, ProjectComponent])
};

ProjectAccountSwitcherComponent.__docgenInfo = {
  props: {
    open: {
      description: '{bool} opens the project/account switcher'
    },
    close: {
      description: '{bool} closes the project/account switcher'
    },
    addProject: {
      description: 'Pass in an instance of a ProjectAccountSwitcher Account'
    },
    showCaret: {
      description: 'shows a caret indicating a flyout in Project Account Switcher'
    },
    hideCaret: {
      description: 'removes caret indicating a flyout in Project Account Switcher'
    },
    setActiveLabel: {
      description: 'Sets the label displayed in the top nav'
    },
    setActiveImage: {
      description: 'Sets the image displayed in the top nav'
    },
    setActiveType: {
      description: 'Sets the type of the item displayed in the top nav'
    },
    onClickOutside: {
      description: 'Calls the provided callback when the switcher is open and the user clicks outside the switcher'
    },
    onClick: {
      description: 'Calls the provided callback when user clicks on the switcher in the top nav'
    },
    children: {
      description: 'support adding Project and Account'
    }
  }
};

ProjectAccountSwitcherComponent.Account = AccountComponent;
ProjectAccountSwitcherComponent.Project = ProjectComponent;

export default ProjectAccountSwitcherComponent;
