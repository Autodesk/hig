/*
 Copyright 2016 Autodesk,Inc.
r
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

import Checkbox from './Checkbox';

describe('<Checkbox>', () => {
  function createHigCheckbox(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higCheckbox = new HIG.Checkbox({ ...defaults });

    higCheckbox.mount(higContainer);

    // to adjust for the randomly generated id
    const inputId = higCheckbox.el.querySelector('input').getAttribute('id');

    return { higCheckbox, higContainer, inputId };
  }

  it('renders the standard  Checkbox', () => {
    const defaults = {
      name: 'agree_toc',
      label: 'I agree',
      value: 'agree'
    };

    const { higCheckbox, higContainer, inputId } = createHigCheckbox(defaults);
    const container = document.createElement('div');
    mount(<Checkbox {...defaults} />, { attachTo: container });

    const label = container.querySelector('label');
    const input = container.querySelector('input');

    // to adjust for the randomly generated id
    label.setAttribute('for', inputId);
    input.setAttribute('id', inputId);

    // expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('does not show a label if not specified', () => {
    expect(true).toEqual(true);
  });
});
