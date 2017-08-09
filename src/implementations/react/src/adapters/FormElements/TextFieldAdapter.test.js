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

import TextField from './TextFieldAdapter';

describe('<TextField>', () => {
  function createHigTextField(defaults = {}) {
    const higContainer = document.createElement('div');

    const higTextField = new HIG.TextField({ ...defaults });

    higTextField.mount(higContainer);

    return { higTextField, higContainer };
  }

  function createOrionTextField(props) {
    return <TextField {...props} />;
  }

  it('renders a text field', () => {
    const defaults = { name: 'mySpecialField' };

    const { higTextField, higContainer } = createHigTextField(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionTextField(defaults), {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a text field with initial props', () => {
    const defaults = {
      icon: 'assets',
      instructions: "Don't just do something, sit there.",
      label: 'Name of your first pet',
      name: 'mySpecialField',
      placeholder: 'Was it Fluffy?',
      required: 'You really must fill this in.',
      value: 'Rex'
    };

    const { higTextField, higContainer } = createHigTextField(defaults);
    higTextField.required(defaults.required);
    const container = document.createElement('div');
    const wrapper = mount(createOrionTextField(defaults), {
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

    const { higTextField, higContainer } = createHigTextField(defaults);
    const orionContainer = document.createElement('div');
    const wrapper = mount(createOrionTextField(defaults), {
      attachTo: orionContainer
    });

    const nextProps = {
      icon: 'assets',
      instructions: "Don't just do something, sit there.",
      label: 'Name of your first pet',
      placeholder: 'Was it Fluffy?',
      required: 'You really must fill this in.',
      value: 'Rex',
      disabled: false
    };

    higTextField.setIcon(nextProps.icon);
    higTextField.setInstructions(nextProps.instructions);
    higTextField.setLabel(nextProps.label);
    higTextField.setPlaceholder(nextProps.placeholder);
    higTextField.required(nextProps.required);
    higTextField.setValue(nextProps.value);
    higTextField.enable();
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
      const wrapper = mount(createOrionTextField({ [eventName]: spy }), {
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
      const wrapper = mount(createOrionTextField({}), {
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
