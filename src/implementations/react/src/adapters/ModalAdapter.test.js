import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';
import Modal from './ModalAdapter';

describe('ModalAdapter', () => {
  function createOrionComponent(props = {}, children = null) {
    const orionContainer = document.createElement('div');
    const orionWrapper = mount(<Modal {...props}>{children}</Modal>, {
      attachTo: orionContainer
    });

    return { orionWrapper, orionContainer };
  }

  function createHigComponent(defaults = {}) {
    const higContainer = document.createElement('div');
    const modal = new HIG.Modal(defaults);
    modal.mount(higContainer);

    return { higComponent: modal, higContainer };
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
      headerColor: 'slate',
      title: 'Are you sure you want to do that?',
      body: '<h1>Stop</h1><p>Give this some consideration.</p>',
      buttons: [
        { title: 'Cancel', type: 'secondary', onClick: () => {} },
        { title: 'Ok', onClick: () => {} }
      ]
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    defaults.buttons.forEach(buttonProps => {
      higComponent.addButton(new HIG.Button(buttonProps));
    });

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with updated props', () => {
    const defaults = {};
    const nextProps = {
      headerColor: 'gray',
      title: 'Congratulations',
      body: '<h1>Nice work.</h1><p>You slayed the dragon.</p>',
      open: true,
      buttons: [
        { title: 'Cancel', type: 'secondary', onClick: () => {} },
        { title: 'Ok', onClick: () => {} }
      ]
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults, <h1>Hello, world!</h1>);

    orionWrapper.setProps(nextProps);
    higComponent.setHeaderColor(nextProps.headerColor);
    higComponent.setTitle(nextProps.title);
    higComponent.setBody(nextProps.body);
    higComponent.open();
    nextProps.buttons.forEach(buttonProps => {
      higComponent.addButton(new HIG.Button(buttonProps));
    });

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onOverlayClick', 'onCloseClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { orionContainer, orionWrapper } = createOrionComponent({});
      console.warn = warnSpy;

      orionWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});