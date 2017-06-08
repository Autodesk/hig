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
import ProjectAccountSwitcherComponent, {
  ProjectAccountSwitcher
} from './ProjectAccountSwitcher';
import ProfileComponent, { Profile } from './Profile';

export class TopNav extends HIGElement {
  componentDidMount() {
    // Add any children
    if (this.profile) {
      this.hig.addProfile(this.profile.hig);
      this.profile.mount();
    }

    if (this.projectAccountSwitcher) {
      this.hig.addProjectAccountSwitcher(this.projectAccountSwitcher.hig);
      this.projectAccountSwitcher.mount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProp) {
    const mapping = { logo: 'setLogo', logoLink: 'setLogoLink' };
    this.commitUpdateWithMapping(updatePayload, mapping);
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Profile:
        return new Profile(this.hig.partials.Profile, props);
      case ProjectAccountSwitcher:
        return new ProjectAccountSwitcher(
          this.hig.partials.ProjectAccountSwitcher,
          props
        );
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance, beforeChild = {}) {
    if (instance instanceof Profile) {
      if (this.profile) {
        throw new Error('only one Profile is allowed');
      } else {
        this.profile = instance;
        if (this.mounted) {
          this.hig.addProfile(instance.hig);
          instance.mount();
        }
      }
    } else if (instance instanceof ProjectAccountSwitcher) {
      if (this.projectAccountSwitcher) {
        throw new Error('only one TopNav is allowed');
      } else {
        this.projectAccountSwitcher = instance;
        if (this.mounted) {
          this.hig.addProjectAccountSwitcher(instance.hig);
          instance.mount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof Profile) {
      this.profile = null;
    }

    instance.unmount();
  }
}

const TopNavComponent = createComponent(TopNav);

TopNavComponent.propTypes = {
  logo: PropTypes.string,
  logoLink: PropTypes.string,
  onHamburgerClick: PropTypes.func,
  addProfile: PropTypes.func,
  addProjectAccountSwitcher: PropTypes.func,
  children: HIGChildValidator([
    ProfileComponent,
    ProjectAccountSwitcherComponent
  ])
};

TopNavComponent.__docgenInfo = {
  props: {
    logo: {
      description: 'sets the logo'
    },

    logoLink: {
      description: 'sets the link of the logo'
    },

    onHamburgerClick: {
      description: 'triggered when hamburger icon is clicked'
    },

    addProfile: {
      description: 'adds Profile to the top nav'
    }
  }
};

TopNavComponent.Profile = ProfileComponent;
TopNavComponent.ProjectAccountSwitcher = ProjectAccountSwitcherComponent;

export default TopNavComponent;
