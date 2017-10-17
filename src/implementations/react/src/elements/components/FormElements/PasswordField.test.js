import { shallow } from "enzyme";
import React from "react";
import PasswordField from "./PasswordField";

describe("PasswordField", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      onFocus: jest.fn(),
      onBlur: jest.fn()
    };
    wrapper = shallow(<PasswordField {...props} />);
  });

  describe("by default", () => {
    beforeEach(() => {
      wrapper = shallow(<PasswordField />);
    });

    it("does not reveal the password", () => {
      expect(wrapper.at(0)).toHaveProp("revealPassword", false);
    });

    it("does not show the password reveal button", () => {
      expect(wrapper.at(0)).toHaveProp("showPasswordRevealButton", false);
    });

    it("does not show the password hide button", () => {
      expect(wrapper.at(0)).toHaveProp("showPasswordHideButton", false);
    });
  });

  describe("on focus", () => {
    const props = {
      onFocus: jest.fn(),
      onBlur: jest.fn()
    };

    beforeEach(() => {
      wrapper = shallow(<PasswordField {...props} />);
      wrapper.instance().handleFocus();
    });

    it("calls the onFocus callback", () => {
      expect(props.onFocus).toHaveBeenCalled();
    });

    it("shows the reveal password button", () => {
      expect(wrapper.at(0)).toHaveProp("showPasswordRevealButton", true);
    });

    describe("then on blur", () => {
      beforeEach(() => {
        wrapper.instance().handleBlur();
      });

      it("calls the onBlur callback", () => {
        expect(props.onBlur).toHaveBeenCalled();
      });

      it("hides the reveal password button", () => {
        expect(wrapper.at(0)).toHaveProp("showPasswordRevealButton", false);
      });
    });

    describe("then when the reveal button is clicked", () => {
      const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };

      beforeEach(() => {
        wrapper.instance().handlePasswordRevealButtonClick(event);
      });

      it("reveals the password", () => {
        expect(wrapper.at(0)).toHaveProp("revealPassword", true);
      });

      it("shows the hide password button", () => {
        expect(wrapper.at(0)).toHaveProp("showPasswordHideButton", true);
        expect(wrapper.at(0)).toHaveProp("showPasswordRevealButton", false);
      });

      describe("then when the hide password button is clicked", () => {
        beforeEach(() => {
          wrapper.instance().handlePasswordHideButtonClick(event);
        });

        it("hides the password", () => {
          expect(wrapper.at(0)).toHaveProp("revealPassword", false);
        });

        it("shows the reveal password button", () => {
          expect(wrapper.at(0)).toHaveProp("showPasswordHideButton", false);
          expect(wrapper.at(0)).toHaveProp("showPasswordRevealButton", true);
        });
      });
    });
  });
});
