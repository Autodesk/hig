import React from "react";
import { mount } from "enzyme";
import MountedByHIGParent from "./MountedByHIGParent";

describe("MountedByHIGParent", () => {
  class VanillaParentComponent {
    _interface = {};
    addComponent = jest.fn();
  }
  class VanillaComponent {
    _interface = {};
    mount = jest.fn();
    unmount = jest.fn();
  }

  describe("with a higParent", () => {
    const higParent = new VanillaParentComponent();

    it("calls the mount function on its parent", () => {
      const higInstance = new VanillaComponent();
      mount(
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

  describe("instantiated without a higParent", () => {
    let higInstance;
    let higParent;
    let wrapper;

    beforeEach(() => {
      higInstance = new VanillaComponent();
    });

    it("does not blow up", () => {
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

    describe("then provided a higParent", () => {
      it("calls the mount function on its parent", () => {
        higParent = new VanillaParentComponent();
        wrapper.setProps({ higParent });

        expect(higParent.addComponent.mock.calls[0][0]).toBeInstanceOf(
          VanillaComponent
        );
      });
    });
  });
});
