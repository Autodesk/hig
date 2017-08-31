
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import TextLink from './TextLinkAdapter';

describe('<TextLinkAdapter>', () => {
  /**
     * Creates a hig-vanilla text link and returns the instance and it's container
     *
     * @param {object} defaults hig-vanilla defaults for the text link
     */
  function createHigTextLink(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higTextLink = new HIG.TextLink({ ...defaults });

    higTextLink.mount(higContainer);

    return { higTextLink, higContainer };
  }

  it('renders a primary text link', () => {
    const defaults = { text: 'this is a primary text link', href: 'http://example.com' };

    const { higTextLink, higContainer } = createHigTextLink(defaults);
    const container = document.createElement('div');

    const wrapper = mount(<TextLink {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders a secondary text link', () => {
    const defaults = { text: 'this is a secondary text link', href: 'http://example.com', type: 'secondary' };

    const { higTextLink, higContainer } = createHigTextLink(defaults);
    const container = document.createElement('div');

    const wrapper = mount(<TextLink {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

});
