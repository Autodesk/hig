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
import HIGChildValidator from '../../HIGChildValidator';

import SectionComponent, { Section } from './Section';

// Does not extend HIGElement because it's not a real HIG component
export class SectionList {
  constructor(higInstance) {
    this.hig = higInstance;
    this.sections = new HIGNodeList({
      type: Section,
      HIGConstructor: this.hig.partials.Section,
      onAdd: (instance, beforeInstance) => {
        this.hig.addSection(instance, beforeInstance);
      }
    });
  }

  mount() {
    this.sections.componentDidMount();
  }

  unmount() {
    // no-op
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    // no-op
  }

  createElement(ElementConstructor, props) {
    return this.sections.createElement(ElementConstructor, props);
  }

  insertBefore(instance, insertBeforeIndex) {
    this.sections.insertBefore(instance, insertBeforeIndex);
  }

  removeChild(instance) {
    this.sections.removeChild(instance);
  }
}

const SectionListComponent = createComponent(SectionList);

SectionListComponent.propTypes = {
  children: HIGChildValidator([SectionComponent])
};

SectionListComponent.__docgenInfo = {
  props: {
    children: {
      description: 'support adding Section'
    }
  }
};

SectionListComponent.Item = SectionComponent;

export default SectionListComponent;
