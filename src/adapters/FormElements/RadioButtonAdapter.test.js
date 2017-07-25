/*
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

import { default as RadioButton } from './RadioButtonAdapter';

const inputId = '1234';

describe('<RadioButton>', () => {
  function createHigComponent(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Checkbox mutates this object
    const higRadioButton = new HIG.RadioButton({ ...defaults });

    higRadioButton.mount(higContainer);

    // to adjust for the randomly generated id
    const label = higContainer.querySelector('label');
    const input = higContainer.querySelector('input');
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);

    return { higComponent: higRadioButton, higContainer };
  }

  function createOrionComponent(defaults) {
    const orionContainer = document.createElement('div');
    const orionWrapper = mount(<RadioButton {...defaults} />, {
      attachTo: orionContainer
    });

    const label = orionContainer.querySelector('label');
    const input = orionContainer.querySelector('input');

    // to adjust for the randomly generated id
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);
    return { orionWrapper, orionContainer };
  }

  it('renders', () => {
    const defaults = {};
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with initial props', () => {
    const defaults = {
      label: 'Label',
      name: 'some-ame',
      value: 'some-value'
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with updated props', () => {
    const defaults = {};
    const nextProps = {
      label: 'Label',
      name: 'some-name',
      value: 'some-value',
      checked: true,
      required: 'You must make a selection',
      disabled: true
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    orionWrapper.setProps(nextProps);

    higComponent.setLabel(nextProps.label);
    higComponent.setName(nextProps.name);
    higComponent.setValue(nextProps.value);
    higComponent.check();
    higComponent.required(nextProps.required);
    higComponent.disable();

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onChange', 'onFocus', 'onHover'].forEach(eventName => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const { orionContainer, orionWrapper } = createOrionComponent({
        [eventName]: () => {}
      });
      const instance = orionWrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName);
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const { orionContainer, orionWrapper } = createOrionComponent({
        [eventName]: () => {}
      });
      orionWrapper.setProps({ [eventName]: () => {} });
      const instance = orionWrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        `${eventName}Dispose`
      );
      expect(disposeFunction).toBeDefined();
    });
  });
});
