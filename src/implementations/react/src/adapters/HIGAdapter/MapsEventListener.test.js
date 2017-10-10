import React from 'react';
import { mount } from 'enzyme';
import HIGAdapter from './HIGAdapter';
import MapsEventListener from './MapsEventListener';

describe('MapsEventListener', () => {
  class VanillaComponent {
    constructor(defaults) {}

    mount = jest.fn()
    onBoop = jest.fn()
  }

  describe('when handler is initially defined', () => {
    const vanilla = new VanillaComponent({});
    const handleBoop = jest.fn();
    const wrapper = mount(<MapsEventListener higInstance={vanilla} listener="onBoop" handler={handleBoop} mounted={true} />);

    it('calls the listener method with the handler', () => {
      expect(vanilla.onBoop).toHaveBeenCalledWith(handleBoop);
    });

    describe('then becomes undefined', () => {
      let dispose = jest.fn();

      beforeEach(() => {
        wrapper.setState({ dispose });
        wrapper.setProps({ handler: undefined });
      });

      it('disposes of the handler', () => {
        expect(dispose).toHaveBeenCalled();
      });
    });

    describe('then it changes', () => {
      let dispose = jest.fn();
      let newHandler = jest.fn();

      beforeEach(() => {
        wrapper.setState({ dispose });
        wrapper.setProps({ handler: newHandler });
      });

      it('disposes of the handler previous', () => {
        expect(dispose).toHaveBeenCalled();
      });

      it('sets the new handler', () => {
        expect(vanilla.onBoop).toHaveBeenLastCalledWith(newHandler);
      });
    });
  });

  describe('when initially undefined', () => {
    const vanilla = new VanillaComponent({});
    const handleBoop = jest.fn();
    const wrapper = mount(<MapsEventListener higInstance={vanilla} listener="onBoop" handler={undefined} mounted={true} />);

    it('does not call the listener', () => {
      expect(vanilla.onBoop).not.toHaveBeenCalled();
    });
  });

  describe('when unmounted', () => {
    it('disposes of the event listener', () => {
      const vanilla = new VanillaComponent({});
      const dispose = jest.fn();
      const wrapper = mount(
        <MapsEventListener
          higInstance={vanilla}
          listener="onBoop"
          mounted={true}
        />);
      wrapper.setState({ dispose });
      wrapper.unmount();

      expect(dispose).toHaveBeenCalled();
    });
  })
});
