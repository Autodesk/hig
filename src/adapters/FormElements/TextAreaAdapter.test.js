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

import TextAreaAdapter from './TextAreaAdapter';


const inputId = '1234';

describe('<TextAreaAdapter>', () => {

  function createHigTextArea(defaults = {}) {
    const higContainer = document.createElement('div');

    const higTextArea = new HIG.TextArea({ ...defaults });

    higTextArea.mount(higContainer);
    setLabelForInputId(higContainer);

    return { higTextArea, higContainer };
  }

  function createOrionTextArea(props) {
    return <TextAreaAdapter {...props} />;
  }

  function setLabelForInputId(higContainer) {
    // to adjust for the randomly generated id
    const label = higContainer.querySelector('label');
    const input = higContainer.querySelector('textarea');
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);
  }


  it('renders a text field', () => {
    const defaults = { name: 'mySpecialField' };

    const { higTextArea, higContainer } = createHigTextArea(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionTextArea(defaults), {
      attachTo: container
    });
    setLabelForInputId(container);

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
      value: 'Rex'
    };

    const { higTextArea, higContainer } = createHigTextArea(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionTextArea(defaults), {
      attachTo: container
    });
    setLabelForInputId(container);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a text field with udpated props', () => {
    const defaults = {
      name: 'mySpecialField'
    };

    const { higTextArea, higContainer } = createHigTextArea(defaults);
    const orionContainer = document.createElement('div');
    const wrapper = mount(createOrionTextArea(defaults), {
      attachTo: orionContainer
    });
    setLabelForInputId(orionContainer);

    const nextProps = {
      icon: 'assets',
      instructions: "Don't just do something, sit there.",
      label: 'Name of your first pet',
      name: 'updatedFieldName',
      placeholder: 'Was it Fluffy?',
      required: 'You really must fill this in.',
      value: 'Rex'
    };

    higTextArea.setInstructions(nextProps.instructions);
    higTextArea.setLabel(nextProps.label);
    higTextArea.setName(nextProps.name);
    higTextArea.setPlaceholder(nextProps.placeholder);
    higTextArea.required(nextProps.required);
    higTextArea.setValue(nextProps.value);

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
      const wrapper = mount(createOrionTextArea({ [eventName]: spy }), {
        attachTo: container
      });
      setLabelForInputId(container);

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName);
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(createOrionTextArea({}), {
        attachTo: container
      });
      setLabelForInputId(container);

      wrapper.setProps({ [eventName]: spy });

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName);
      expect(disposeFunction).toBeDefined();
    });
  });
});
