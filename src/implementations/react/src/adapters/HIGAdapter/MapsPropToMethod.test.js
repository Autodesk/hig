import React from 'react';
import { mount, shallow } from 'enzyme';
import HIGAdapter from './HIGAdapter';
import MapsPropToMethod from './MapsPropToMethod';

describe('MapsPropToMethod', () => {
  class VanillaComponent {
    constructor(defaults) {}

    mount = jest.fn()
    setFoo = jest.fn()
  }

  describe('for a setter', () => {
    it('calls the setter with the value', () => {
      const higInstance = new VanillaComponent({});
      const wrapper = mount(<MapsPropToMethod setter="setFoo" value="foo" higInstance={higInstance} mounted={true} />);

      expect(higInstance.setFoo).toHaveBeenCalledWith('foo');
    });

    it('updates the setter with the value', () => {
      const higInstance = new VanillaComponent({});
      const wrapper = mount(<MapsPropToMethod setter="setFoo" value="foo" higInstance={higInstance} mounted={true} />);

      wrapper.setProps({ value: 'bar' });

      expect(higInstance.setFoo).toHaveBeenLastCalledWith('bar');
    });

    describe('when value initially undefined', () => {
      it('does not pass undefined to the setter', () => {
        const higInstance = new VanillaComponent({});
        const wrapper = mount(<MapsPropToMethod setter="setFoo" higInstance={higInstance} mounted={true} />);

        expect(higInstance.setFoo).not.toHaveBeenCalled();
      });
    });

    describe('when value is defined', () => {
      describe('then it becomes undefined', () => {
        it('passes undefined to the setter', () => {
          const higInstance = new VanillaComponent({});
          const wrapper = mount(<MapsPropToMethod setter="setFoo" value="foo" higInstance={higInstance} mounted={true} />);

          wrapper.setProps({ value: undefined });

          expect(higInstance.setFoo).toHaveBeenCalledWith(undefined);
        });
      });
    });
  });

  describe('with a custom mapping', () => {
    it('calls mapper with the value', () => {
      const higInstance = new VanillaComponent({});
      const mapper = jest.fn();
      const wrapper = mount(<MapsPropToMethod value="foo" higInstance={higInstance} mounted={true}>{mapper}</MapsPropToMethod>);

      expect(mapper).toHaveBeenCalledWith(higInstance, 'foo');
    });
  });

  describe('with a non-existant setter method', () => {
    it('throws a helpful error message', () => {
      const higInstance = new VanillaComponent({});

      expect(() => {
        const wrapper = mount(<MapsPropToMethod name="MySpecialComponent" setter="setBaz" value="foo" higInstance={higInstance} mounted={true} />);
      }).toThrow(TypeError(`MySpecialComponent has no method 'setBaz'`));
    });
  });
});
