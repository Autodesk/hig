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
import HIGChildValidator from '../../HIGChildValidator';
import HIGNodeList from '../../HIGNodeList';

import LinkComponent, { Link } from './Link';

// Does not extend HIGElement because it's not a real HIG component
export class LinkList {
  constructor(higInstance) {
    this.hig = higInstance;
    this.links = new HIGNodeList({
      type: Link,
      HIGConstructor: this.hig.partials.Link,
      onAdd: (instance, beforeInstance) => {
        this.hig.addLink(instance, beforeInstance);
      }
    });
  }

  mount() {
    this.links.componentDidMount();
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(ElementConstructor, props) {
    return this.links.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.links.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.links.removeChild(instance);
  }
}

const LinkListComponent = createComponent(LinkList);

LinkListComponent.propTypes = {
  children: HIGChildValidator([LinkComponent])
};

LinkListComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Link'
    }
  }
};

LinkListComponent.Link = LinkComponent;

export default LinkListComponent;
