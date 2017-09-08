import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import HigAdapter from './HigAdapter';
import MountedByHIGParent from './MountedByHIGParent';

describe('MountedByHIGParent', () => {
  class VanillaParentComponent {
    addComponent = jest.fn()
  }
  class VanillaComponent {
    mount = jest.fn()
    unmount = jest.fn()
  }

  describe('with a higParent', () => {
    const higParent = new VanillaParentComponent();

    it('calls the mount function on its parent', () => {
      const higInstance = new VanillaComponent();
      const wrapper = mount(
        <MountedByHIGParent
          higInstance={higInstance}
          higParent={higParent}
          mounted={false}
          mounter="addComponent"
          onMount={() => {}}
        />
      );

      expect(higParent.addComponent).toHaveBeenCalledWith(higInstance);
    });
  });

  describe('instantiated without a higParent', () => {
    let higInstance;
    let higParent;
    let wrapper;

    beforeEach(() => {
      higInstance = new VanillaComponent();
    });

    it('does not blow up', () => {
      expect(() => {
        wrapper = mount(
          <MountedByHIGParent
            higParent={higParent}
            mounter="addComponent"
            onMount={() => {}}
            higInstance={higInstance}
            mounted={false}
          />
        );
      }).not.toThrow();
    });

    describe('then provided a higParent', () => {
      it('calls the mount function on its parent', () => {
        higParent = new VanillaParentComponent();
        wrapper.setProps({ higParent });

        expect(higParent.addComponent.mock.calls[0][0]).toBeInstanceOf(VanillaComponent);
      });
    });
  });
});
