
import { mount } from 'enzyme';
import React from 'react';

class SharedExamples {
  constructor(context, createHigContext) {
    this.Context = context;
    this.createHigContext = createHigContext;
  }

  verifyPropsSet(config, defaultProps = {}) {
    const props = {
      ...defaultProps,
      [config.key]: config.sampleValue
    };

    const { higContainer, higItem } = this.createHigContext(props);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<this.Context {...props} />, {
      attachTo: reactContainer
    });

    expect(reactContainer.firstChild.outerHTML).toMatch(config.sampleValue);
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  }

  verifyPropsUpdate(config, defaultProps = {}) {
    const props = {
      ...defaultProps,
      [config.key]: config.sampleValue
    };
    const { higContainer, higItem } = this.createHigContext(props);

    const reactContainer = document.createElement('div');

    const wrapper = mount(<this.Context {...props} />, {
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
