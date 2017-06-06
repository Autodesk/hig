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
import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';
import createComponent from '../../../adapters/createComponent';
import AccountComponent, { Account } from './Account';
import ProjectComponent, { Project } from './Project';



export class ProjectAccountSwitcher extends HIGElement {
  componentDidMount() {
    if (this.initialProps.isOpen === true) {
      this.hig.open();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = {
      activeImage: 'setActiveImage',
      activeLabel: 'setActiveLabel',
      activeType: 'setActiveType',
    };

    const openIndex = updatePayload.indexOf('isOpen');
    if (openIndex >= 0) {
      const [openKey, openSetting] = updatePayload.splice(openIndex, 2);
      if (openKey) {
        if (openSetting === true) {
          this.hig.open();
        } else {
          this.hig.close();
        }
      }
    }
    this.commitUpdateWithMapping(updatePayload, mapping);
  }

   createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Project:
        return new Project(this.hig.partials.Project, props);
      case Account:
        return new Account(this.hig.partials.Account, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof Project) {
      if (this.sideNav) {
        throw new Error('only one SideNav is allowed');
      } else {
        this.sideNav = instance;
        if (this.mounted) {
          this.hig.addSideNav(instance.hig);
          instance.mount();
        }
      }
    } else if (instance instanceof Account) {
      if (this.topNav) {
        throw new Error('only one TopNav is allowed');
      } else {
        this.topNav = instance;
        if (this.mounted) {
          this.hig.addTopNav(instance.hig);
          instance.mount();
        }
      }
    }  else {
      throw new Error('unknown type');
    }
  }
}

const ProjectAccountSwitcherComponent = createComponent(ProjectAccountSwitcher);

ProjectAccountSwitcherComponent.propTypes = {
  isOpen: PropTypes.bool,
  activeLabel: PropTypes.string,
  activeImage: PropTypes.string,
  activeType: PropTypes.string,
  onClickOutside: PropTypes.func,
  onClick: PropTypes.func,
  children: HIGChildValidator([
    AccountComponent, 
    ProjectComponent 
  ])
};

ProjectAccountSwitcherComponent.__docgenInfo = {
  props: {
    activeLabel: {
      description: 'sets {String} the label displayed in the top nav'
    },
     activeImage: {
      description: 'sets {String} the image displayed in the top nav'
    },
    activeType: {
      description: 'sets the {String} type of the item displayed in the top nav'
    },
    addAccount: {
      description: '{func} pass in an instance of a ProjectAccountSwitcher Account'  
    },
    addProject: {
      description: '{func} pass in an instance of a ProjectAccountSwitcher Project'
    },
    open: {
      description: '{func} opens the project/account switcher'
    },
    close: {
      description: '{func} closes the project/account switcher'
    },
    onClickOutside: {
      description:  '{func} calls the provided callback when the switcher is open and the user clicks outside the switcher'
    },
    onClick: {
      description: '{func} calls the provided callback when user clicks on the switcher in the top nav'
    },
    children: {
      description: 'support adding Project and Account'
    }
  }  
}; 

export default ProjectAccountSwitcherComponent;
