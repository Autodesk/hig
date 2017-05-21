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
import createComponent from '../../../adapters/createComponent';
import HIGElement from '../../HIGElement';
import HIGChildValidator from '../../HIGChildValidator';

import SectionListComponent, { SectionList } from './SectionList';
import LinkListComponent, { LinkList } from './LinkList';

export class SideNav extends HIGElement {
  componentDidMount() {
    if (this.sections) {
      this.sections.mount();
    }

    if (this.links) {
      this.links.mount();
    }
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case SectionList:
        return new SectionList(this.hig); // special case hand over the hig instance
      case LinkList:
        return new LinkList(this.hig); // special case hand over the hig instance
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof SectionList) {
      if (this.sections) {
        throw new Error('only one SectionList is allowed');
      } else {
        this.sections = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else if (instance instanceof LinkList) {
      if (this.links) {
        throw new Error('only one LinkList is allowed');
      } else {
        this.links = instance;

        if (this.mounted) {
          instance.componentDidMount();
        }
      }
    } else {
      throw new Error('unknown type');
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    this.appendChild(instance);
  }

  removeChild(instance) {
    if (instance instanceof SectionList) {
      this.sections = null;
    }

    if (instance instanceof LinkList) {
      this.links = null;
    }

    instance.unmount();
  }
}

const SideNavComponent = createComponent(SideNav);

SideNavComponent.propTypes = {
  children: HIGChildValidator([SectionListComponent, LinkListComponent])
};

SideNavComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding SectionList, and LinkList'
    }
  }
};

SideNavComponent.SectionList = SectionListComponent;
SideNavComponent.LinkList = LinkListComponent;

export default SideNavComponent;
