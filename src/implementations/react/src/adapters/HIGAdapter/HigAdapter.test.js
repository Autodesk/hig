import React from 'react';
import { mount, shallow } from 'enzyme';
import HIGAdapter from './HIGAdapter';

describe('HIGAdapter', () => {
  class VanillaComponent {
    mount = jest.fn()
    unmount = jest.fn()
  }

  describe('on mount', () => {
    it('mounts the instance with an element and a comment', () => {
      const wrapper = mount(<HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent" />);
      const { higInstance } = wrapper.state();

      expect(higInstance.mount).toHaveBeenCalled();
      expect(higInstance.mount.mock.calls[0][0]).toBeInstanceOf(HTMLElement);
      expect(higInstance.mount.mock.calls[0][1]).toBeInstanceOf(Comment);
    });

    it('sets name as the tagname', () => {
      const wrapper = shallow(<HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent" />);

      expect(wrapper.find('hig-mycomponent')).toBePresent();
    });
  });

  describe('providing context to adapter subcomponents', () => {
    it('calls the children function with "higInstance"', () => {
      const childFunction = jest.fn();
      mount(<HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent">{childFunction}</HIGAdapter>);

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.higInstance).toBeInstanceOf(VanillaComponent);
    });

    it('calls the children function with "mounted"', () => {
      const childFunction = jest.fn();
      mount(<HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent">{childFunction}</HIGAdapter>);

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.mounted).toEqual(true);
    });

    it('passes displayName to the children', () => {
      const childFunction = jest.fn();
      mount(<HIGAdapter
        displayName="MySpecialComponent"
        HIGConstructor={VanillaComponent}
      >
        {childFunction}
      </HIGAdapter>);

      const adapterProps = childFunction.mock.calls.pop().pop();
      expect(adapterProps.displayName).toEqual('MySpecialComponent');
    });

    describe('with higParent context', () => {
      class VanillaParentComponent {
        mount = jest.fn()
        addComponent = jest.fn()
      }

      it('calls the children function with "higParent"', () => {
        const childFunction = jest.fn();
        const higParent = new VanillaParentComponent({});
        const wrapper = mount(
          <HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent">{childFunction}</HIGAdapter>,
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
      wrapper = mount(<HIGAdapter HIGConstructor={VanillaComponent} displayName="MyComponent" />);
    });

    it('does not blow up', () => {
      expect(() => {
        wrapper.unmount();
      }).not.toThrow();
    });

    it('calls unmount on the hig instance', () => {
      const { higInstance } = wrapper.state();
      wrapper.unmount();

      expect(higInstance.unmount).toHaveBeenCalled();
    });
  });
});
