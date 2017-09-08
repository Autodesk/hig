import React from 'react';
import { mount, shallow } from 'enzyme';
import HigAdapter from './HigAdapter';

describe('HigAdapter', () => {
  class VanillaComponent {
    constructor(defaults) {}

    mount = jest.fn()
    unmount = jest.fn()
  }

  describe('on mount', () => {
    it('mounts the instance with an element and a comment', () => {
      const wrapper = mount(
        <HigAdapter HIGConstructor={VanillaComponent} />
      );
      const higInstance = wrapper.state().higInstance;

      expect(higInstance.mount).toHaveBeenCalled();
      expect(higInstance.mount.mock.calls[0][0]).toBeInstanceOf(HTMLElement);
      expect(higInstance.mount.mock.calls[0][1]).toBeInstanceOf(Comment);
    });

    it('sets name as the tagname', () => {
      const wrapper = shallow(
        <HigAdapter HIGConstructor={VanillaComponent} displayName="MyComponent" />
      );

      expect(wrapper.find('HIGMyComponent')).toBePresent();
    });
  });


  describe('providing context to adapter subcomponents', () => {
    it('calls the children function with "higInstance"', () => {
      const childFunction = jest.fn();
      const wrapper = mount(
        <HigAdapter HIGConstructor={VanillaComponent}>{childFunction}</HigAdapter>
      );

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.higInstance).toBeInstanceOf(VanillaComponent);
    });

    it('calls the children function with "mounted"', () => {
      const childFunction = jest.fn();
      const wrapper = mount(
        <HigAdapter HIGConstructor={VanillaComponent}>{childFunction}</HigAdapter>
      );

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.mounted).toEqual(true);
    });

    it('passes displayName to the children', () => {
      const childFunction = jest.fn();
      const wrapper = mount(
        <HigAdapter displayName="MySpecialComponent" HIGConstructor={VanillaComponent}>{childFunction}</HigAdapter>
      );

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.displayName).toEqual('MySpecialComponent');
    });

    describe('with higParent context', () => {
      class VanillaParentComponent {
        constructor(defaults) {}

        mount = jest.fn()
        addComponent = jest.fn()
      }

      it('calls the children function with "higParent"', () => {
        const childFunction = jest.fn();
        const higParent = new VanillaParentComponent({});
        const wrapper = mount(
          <HigAdapter HIGConstructor={VanillaComponent}>{childFunction}</HigAdapter>,
          { context: { higParent } }
        );
        wrapper.setState({ mounted: true });

        const adapterProps = childFunction.mock.calls.pop().pop();
        expect(adapterProps.higParent).toEqual(higParent);
      });
    });
  });

  describe('on unmount', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<HigAdapter HIGConstructor={VanillaComponent} />);
    });

    it('does not blow up', () => {
      expect(() => {
        wrapper.unmount();
      }).not.toThrow();
    });

    it('calls unmount on the hig instance', () => {
      const higInstance = wrapper.state().higInstance;
      wrapper.unmount();

      expect(higInstance.unmount).toHaveBeenCalled();
    });
  });
});
