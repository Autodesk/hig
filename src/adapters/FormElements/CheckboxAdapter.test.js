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
import TestUtils from 'react-dom/test-utils';

import { default as Checkbox } from './CheckboxAdapter';

const inputId = '1234';

describe('<Checkbox>', () => {
  function createHigCheckbox(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Checkbox mutates this object
    const higCheckbox = new HIG.Checkbox({ ...defaults });

    higCheckbox.mount(higContainer);

    setLabelForInputId(higContainer);
    return { higCheckbox, higContainer };
  }

  function createComponent(defaults) {
    const container = document.createElement('div');
    mount(<Checkbox {...defaults} />, { attachTo: container });

    setLabelForInputId(container);
    return container;
  }

  function setLabelForInputId(higContainer) {
    // to adjust for the randomly generated id
    const label = higContainer.querySelector('label');
    const input = higContainer.querySelector('input');
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);
  }



  it('renders the standard  Checkbox', () => {
    const defaults = {
      name: 'agree_toc',
      label: 'I agree',
      value: 'agree'
    };

    const { higCheckbox, higContainer } = createHigCheckbox(defaults);
    const container = createComponent(defaults);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
    expect(container.querySelector('label').getAttribute('class')).not.toMatch(
      /hig--hidden/
    );
  });

  it('does not show a label if not specified', () => {
    const defaults = {
      label: '',
      name: 'agree_toc',
      value: 'agree'
    };

    const { higCheckbox, higContainer } = createHigCheckbox(defaults);
    const container = createComponent(defaults);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );

    expect(container.querySelector('label').textContent).toEqual('');
    expect(container.querySelector('label').getAttribute('class')).toMatch(
      /hig--hidden/
    );
  });

  it(`sets attributes correctly by default`, () => {
    const defaults = {
      label: 'check attributes',
      required: true,
      checked: true,
      disabled: true
    };

    const { higCheckbox, higContainer } = createHigCheckbox(defaults);
    expect(higContainer.querySelector('input').getAttribute('required')).toBe(
      ''
    );
    expect(higContainer.querySelector('input').getAttribute('disabled')).toBe(
      ''
    );
    expect(higContainer.querySelector('input').checked).toBe(true);
  });

  it('properly updates name value and label', () => {
    const defaults = {
      label: '',
      name: '',
      value: ''
    };
    const { higCheckbox, higContainer } = createHigCheckbox(defaults);

    higCheckbox.setLabel('NEW LABEL!');
    expect(
      higContainer.querySelector('label').getAttribute('class')
    ).not.toMatch(/hig--hidden/);
    expect(higContainer.querySelector('label').textContent).toEqual(
      'NEW LABEL!'
    );

    higCheckbox.setValue('newvalue');
    expect(higContainer.querySelector('input').getAttribute('value')).toEqual(
      'newvalue'
    );

    higCheckbox.setName('newname');
    expect(higContainer.querySelector('input').getAttribute('name')).toEqual(
      'newname'
    );
  });

  it('properly updates required,disabled,checked when set to true', () => {
    const defaults = {
      name: 'agree_toc',
      label: 'I agree',
      value: 'agree'
    };

    const higContainer = document.createElement('div');
    const wrapper = mount(<Checkbox {...defaults} />, {
      attachTo: higContainer
    });

    expect(higContainer.querySelector('input').getAttribute('required')).toBe(null);
    expect(higContainer.querySelector('input').getAttribute('disabled')).toBe(null);
    expect(higContainer.querySelector('input').getAttribute('checked')).toBe(null);

    wrapper.setProps({ required: true });
    expect(higContainer.querySelector('input').getAttribute('required')).toBe('');

    wrapper.setProps({ checked: true });
    expect(higContainer.querySelector('input').checked).toBe(true);

    wrapper.setProps({ disabled: true });
    expect(higContainer.querySelector('input').getAttribute('disabled')).toBe('true');
  });

  ['onChange'].forEach(eventName => {
    it(`sets up ${eventName} initially`, () => {
      const eventSpy = jest.fn();
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Checkbox {...{ onChange: eventSpy }} />, {
        attachTo: reactContainer
      });
      const instance = wrapper.instance().instance;
      instance.events['onChange']();

      // expect onClickSpy to be called
      expect(eventSpy).toBeCalled();
    });

    it(`sets new events`, () => {
      const eventSpy = jest.fn();
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Checkbox />, { attachTo: reactContainer });

      wrapper.setProps({
        onChange: eventSpy,
        onHover: eventSpy,
        onFocus: eventSpy
      });
    });

    it('warns if the prop is not recognized', () => {
      const eventSpy = jest.fn();
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Checkbox />, { attachTo: reactContainer });
      console.warn = eventSpy;
      wrapper.setProps({ foo: 'bar' });
      expect(eventSpy).toBeCalled();
    });
  });
});
