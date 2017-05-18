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
import HIGNodeList from '../../HIGNodeList';

import SectionComponent, { Section } from './Section';

// Does not extend HIGElement because it's not a real HIG component
export class SectionList {
  constructor(higInstance) {
    this.hig = higInstance;
    this.sections = new HIGNodeList();
  }

  mount() {
    this.mounted = true;

    for (let instance of this.sections) {
      this.hig.addSection(instance.hig);
      instance.mount();
    }
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case Section:
        return new Section(this.hig.partials.Section, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  appendChild(instance) {
    if (instance instanceof Section) {
      this.sections.appendChild(instance);

      if (this.mounted) {
        this.hig.addSection(instance.hig);
        instance.mount();
      }
    } else {
      throw new Error(`unknown type ${instance}`);
    }
  }

  insertBefore(instance, insertBeforeIndex) {
    const beforeChild = this.sections.item(insertBeforeIndex);
    this.sections.insertBefore(instance, beforeChild);
    this.hig.addSection(instance.hig, beforeChild.hig);
    instance.mount();
  }

  removeChild(instance) {
    const index = this.sections.indexOf(instance);
    this.sections.splice(index, 1);
    instance.unmount();
  }
}

const SectionListComponent = createComponent(SectionList);

SectionListComponent.Item = SectionComponent;

export default SectionListComponent;
