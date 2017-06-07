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
import { mount } from 'enzyme';
import React from 'react';

class SharedExamples {
  constructor(context, createHigContext) {
    this.Context = context;
    this.createHigContext = createHigContext;
  }

  verifyPropsSet(config) {
    const defaults = { [config.key]: config.sampleValue };
    const { higContainer, higItem } = this.createHigContext(defaults);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<this.Context {...defaults} />, {
      attachTo: reactContainer
    });

    expect(reactContainer.firstChild.outerHTML).toMatch(config.sampleValue);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  }

  verifyPropsUpdate(config) {
    const defaults = { [config.key]: config.sampleValue };
    const { higContainer, higItem } = this.createHigContext(defaults);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<this.Context {...defaults} />, {
      attachTo: reactContainer
    });

    //Update hig.web instance
    higItem[config.mutator](config.updateValue);

    //Update React Instance
    wrapper.setProps({ [config.key]: config.updateValue });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    //Check them against each other
    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  }
}

export default SharedExamples;
