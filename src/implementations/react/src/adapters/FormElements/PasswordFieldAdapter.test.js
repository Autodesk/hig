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
import * as HIG from 'hig-vanilla';
import React from 'react';

import PasswordField from './PasswordFieldAdapter';

describe('<PasswordField>', () => {
  function createHigPasswordField(defaults = {}) {
    const higContainer = document.createElement('div');

    const higPasswordField = new HIG.PasswordField({ ...defaults });

    higPasswordField.mount(higContainer);

    return { higPasswordField, higContainer };
  }

  function createOrionPasswordField(props) {
    return <PasswordField {...props} />;
  }

  it('renders a text field', () => {
    const defaults = { name: 'mySpecialField' };

    const { higPasswordField, higContainer } = createHigPasswordField(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionPasswordField(defaults), {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a text field with initial props', () => {
    const defaults = {
      instructions: "Don't just do something, sit there.",
      label: 'Name of your first pet',
      name: 'mySpecialField',
      placeholder: 'Was it Fluffy?',
      required: 'You really must fill this in.',
      value: 'Rex'
    };

    const { higPasswordField, higContainer } = createHigPasswordField(defaults);
    higPasswordField.required(defaults.required);
    const container = document.createElement('div');
    const wrapper = mount(createOrionPasswordField(defaults), {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a text field with udpated props', () => {
    const defaults = {
      name: 'mySpecialField',
      disabled: true
    };

    const { higPasswordField, higContainer } = createHigPasswordField(defaults);
    const orionContainer = document.createElement('div');
    const wrapper = mount(createOrionPasswordField(defaults), {
      attachTo: orionContainer
    });

    const nextProps = {
      instructions: "Don't just do something, sit there.",
      label: 'Name of your first pet',
      placeholder: 'Was it Fluffy?',
      required: 'You really must fill this in.',
      value: 'Rex',
      disabled: false
    };

    higPasswordField.setInstructions(nextProps.instructions);
    higPasswordField.setLabel(nextProps.label);
    higPasswordField.setPlaceholder(nextProps.placeholder);
    higPasswordField.required(nextProps.required);
    higPasswordField.setValue(nextProps.value);
    higPasswordField.enable();
    wrapper.setProps(nextProps);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onBlur', 'onChange', 'onFocus', 'onInput'].forEach(eventName => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(createOrionPasswordField({ [eventName]: spy }), {
        attachTo: container
      });
      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        eventName + 'Dispose'
      );
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(createOrionPasswordField({}), {
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
