
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import Avatar from './AvatarAdapter';

describe('<AvatarAdapter>', () => {
  /**
     * Creates a hig-vanilla Avatar and returns the instance and it's container
     *
     * @param {object} defaults hig-vanilla defaults for the Avatar
     */
  function createHigAvatar(defaults = {}) {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Avatar mutates this object
    const higAvatar = new HIG.Avatar({ ...defaults });

    higAvatar.mount(higContainer);

    return { higAvatar, higContainer };
  }

  it('renders avatar without image', () => {
    const defaults = { name: 'Regular Avatar' };

    const { higAvatar, higContainer } = createHigAvatar(defaults);
    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the small Avatar', () => {
    const defaults = {
      size: 'small',
      name: 'Small Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the medium Avatar', () => {
    const defaults = {
      size: 'medium',
      name: 'Medium Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the large Avatar', () => {
    const defaults = {
      size: 'large',
      name: 'Large Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the extralarge Avatar', () => {
    const defaults = {
      size: 'extralarge',
      name: 'Extralarge Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders the extralarge Avatar', () => {
    const defaults = {
      size: 'extralarge',
      name: 'Extralarge Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('render image small', () => {
    const defaults = {
      image: 'https://api.adorable.io/avatars/400/abott@adorable.io.png',
      size: 'small',
      name: 'Abott Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('render image', () => {
    const defaults = {
      image: 'https://api.adorable.io/avatars/400/abott@adorable.io.png',
      size: 'medium',
      name: 'Abott Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('render image', () => {
    const defaults = {
      image: 'https://api.adorable.io/avatars/400/abott@adorable.io.png',
      size: 'large',
      name: 'Abott Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('render image', () => {
    const defaults = {
      image: 'https://api.adorable.io/avatars/400/abott@adorable.io.png',
      size: 'extralarge',
      name: 'Abott Avatar'
    };

    const { higAvatar, higContainer } = createHigAvatar(defaults);

    const container = document.createElement('div');

    const wrapper = mount(<Avatar {...defaults} />, { attachTo: container });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
  
});
