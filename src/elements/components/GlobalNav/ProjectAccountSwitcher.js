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
  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = {
      activeLabel: 'setActiveLabel',
      activeImage: 'setActiveImage',
      activeType: 'setActiveType'
    };

    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      if (mapping[propKey]) {
        this.hig[mapping[propKey]](propValue);
      } else {
        this.commitPropChange(propKey, propValue);
      }
    }
  }
}

const ProjectAccountSwitcherComponent = createComponent(ProjectAccountSwitcher);

ProjectAccountSwitcherComponent.propTypes = {
  activeLabel: PropTypes.string,
  activeImage: PropTypes.string,
  activeType: PropTypes.string,
  addAccount: PropTypes.func,
  addProject: PropTypes.func,
  open: PropTypes.func,
  close: PropTypes.func,
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
