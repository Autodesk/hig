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

import RangeAdapter from './RangeAdapter';

const inputId = '1234';

describe('<RangeAdapter>', () => {
  function createHigRange(defaults = {}) {
    const higContainer = document.createElement('div');

    const higRange = new HIG.Range({ ...defaults });

    higRange.mount(higContainer);
    mockDataset(higContainer);

    setLabelForInputId(higContainer);

    return { higRange, higContainer };
  }

  function createOrionRange(props) {
    return <RangeAdapter {...props} />;
  }

  function mockDataset(higContainer) {
    higContainer.querySelector('.hig__range__field__range-values').dataset = {
      rangeMin: 0,
      rangeMax: 0
    }

  }

  function setLabelForInputId(higContainer) {
    // to adjust for the randomly generated id
    const label = higContainer.querySelector('label');
    const input = higContainer.querySelector('input');
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);
  }

  it('renders a range', () => {
    const defaults = { name: 'mySpecialField', label: 'foo' };

    const { higRange, higContainer } = createHigRange(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionRange(defaults), {
      attachTo: container
    });
    setLabelForInputId(container);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a range with initial props', () => {
    const defaults = {
      instructions: "Don't just do something, sit there.",
      label: 'Age of your first pet',
      name: 'mySpecialField',
      placeholder: 'How oldu?',
      value: 10
    };

    const { higRange, higContainer } = createHigRange(defaults);
    const container = document.createElement('div');
    const wrapper = mount(createOrionRange(defaults), {
      attachTo: container
    });
    setLabelForInputId(container);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a range with udpated props', () => {
    const defaults = {
      name: 'mySpecialField', label: 'bar'
    };

    const { higRange, higContainer } = createHigRange(defaults);
    const orionContainer = document.createElement('div');
    const wrapper = mount(createOrionRange(defaults), {
      attachTo: orionContainer
    });

    setLabelForInputId(orionContainer);

    const nextProps = {
      label: 'How old is your pet?',
      required: 'You really must fill this in.',
      minValue: 1,
      maxValue: 20,
      step: 1,
      value: 1
    };
    mockDataset(orionContainer);

    higRange.setLabel(nextProps.label);
    higRange.required(nextProps.required);
    higRange.setMax(nextProps.maxValue);
    higRange.setMin(nextProps.minValue);
    higRange.setStep(nextProps.step);
    higRange.setValue(nextProps.value);

    wrapper.setProps(nextProps);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onBlur','onFocus', 'onChange'].forEach(eventName => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(createOrionRange({ [eventName]: spy }), {
        attachTo: container
      });
      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName+'Dispose');
      expect(disposeFunction).toBeDefined();

    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement('div');
      const wrapper = mount(createOrionRange({}), {
        attachTo: container
      });
      wrapper.setProps({ [eventName]: spy });

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(eventName+'Dispose');
      expect(disposeFunction).toBeDefined();
    });
  });

});
