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
	
	 it('renders the icon button', () => {
    const defaults = { title: 'icon button', link: 'http://example.com', icon: 'gear',  };

		const { higButton, higContainer } = createHigButton(defaults);
		const container = document.createElement('div');
		higButton.setIcon('gear');

    const wrapper = mount(<IconButton {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the disabled icon button', () => {
    const defaults = { title: 'icon button', link: 'http://example.com', icon: 'gear' };

    const { higButton, higContainer } = createHigButton(defaults);
		const container = document.createElement('div');
		higButton.setIcon('gear');
		higButton.disable();

    const wrapper = mount(<IconButton {...defaults} disabled={true} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
