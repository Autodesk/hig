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
import * as HIG from 'hig.web';
import React from 'react';

import IconButton from './IconButton';

describe('<IconButton>', () => {
  /**
     * Creates a hig.web button and returns the instance and it's container
     *
     * @param {object} defaults hig.web defaults for the button
     */
  function createHigButton(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higButton = new HIG.IconButton({ ...defaults });

    higButton.mount(higContainer);

    return { higButton, higContainer };
  }

  it('renders the icon button with initial props', () => {
    const defaults = {
      title: 'icon button',
      link: 'http://example.com',
      icon: 'gear'
    };

    const { higButton, higContainer } = createHigButton(defaults);
    const container = document.createElement('div');

    const wrapper = mount(<IconButton {...defaults} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the icon button with updated props', () => {
    const defaults = {};

    const { higButton, higContainer } = createHigButton(defaults);
    const container = document.createElement('div');

    const wrapper = mount(<IconButton {...defaults} />, {
      attachTo: container
    });

    const nextProps = {
      title: 'icon button',
      link: 'http://example.com',
      icon: 'gear',
      disabled: true
    };

    higButton.setTitle(nextProps.title);
    higButton.setLink(nextProps.link);
    higButton.setIcon(nextProps.icon);
    higButton.disable();
    wrapper.setProps(nextProps);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the disabled icon button', () => {
    const defaults = {
      title: 'icon button',
      link: 'http://example.com',
      icon: 'gear',
      disabled: true
    };

    const { higButton, higContainer } = createHigButton(defaults);
    const container = document.createElement('div');
    higButton.disable();

    const wrapper = mount(<IconButton {...defaults} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onBlur', 'onClick', 'onFocus', 'onHover'].forEach(eventName => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(<IconButton {...{ [eventName]: spy }} />, {
        attachTo: container
      });
      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName);
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(<IconButton />, {
        attachTo: container
      });
      wrapper.setProps({ [eventName]: spy });

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        `${eventName}Dispose`
      );
      expect(disposeFunction).toBeDefined();
    });
  });
});
