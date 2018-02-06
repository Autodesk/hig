import React from "react";
import { mount } from "enzyme";
import Tabs, { Tab } from "./index";
import TabsAdapter from "../../../adapters/Tabs/TabsAdapter";
import InternalTab from "./Tab";

function render({
  activeTabIndex,
  align,
  onTabChange,
  tab1Active,
  tab2Active
} = {}) {
  return (
    <Tabs
      activeTabIndex={activeTabIndex}
      onTabChange={onTabChange}
      align={align}
    >
      <Tab label="Details" active={tab1Active}>
        <h1>Foo</h1>
      </Tab>
      <Tab label="Activites" active={tab2Active}>
        <h2>Bar</h2>
      </Tab>
    </Tabs>
  );
}

describe("Tabs", () => {
  let wrapper;

  describe("alignment", () => {
    it("is passed to the TabsAdapter", () => {
      wrapper = mount(render({ align: "left" }));
      expect(wrapper.find(TabsAdapter)).toHaveProp("align", "left");
    });
  });

  describe("with two tabs", () => {
    it("renders the tabs", () => {
      wrapper = mount(render());
      expect(wrapper.find(InternalTab).length).toEqual(2);
    });

    describe("with no active tab", () => {
      beforeEach(() => {
        wrapper = mount(render());
      });

      it("activates the first tab", () => {
        expect(wrapper.find(InternalTab).first()).toHaveProp("active", true);
      });

      it("renders the content of the first tab", () => {
        expect(wrapper.text()).toMatch("Foo");
        expect(wrapper.text()).not.toMatch("Bar");
      });

      describe("clicking on a tab", () => {
        const secondTabIndex = 1;
        beforeEach(() => {
          wrapper
            .find(InternalTab)
            .get(secondTabIndex)
            .props.activateTab(secondTabIndex);
        });

        it("activates the tab", () => {
          expect(wrapper.find(InternalTab).at(secondTabIndex)).toHaveProp(
            "active",
            true
          );
          expect(wrapper.find(InternalTab).first()).not.toHaveProp(
            "active",
            true
          );
        });

        it("renders the tab's content", () => {
          expect(wrapper.text()).not.toMatch("Foo");
          expect(wrapper.text()).toMatch("Bar");
        });
      });
    });

    describe("with an active tab", () => {
      const firstTabIndex = 0;
      const secondTabIndex = 1;
      const tabChangeHandler = jest.fn();
      beforeEach(() => {
        wrapper = mount(
          render({
            activeTabIndex: secondTabIndex,
            onTabChange: tabChangeHandler
          })
        );
      });

      it("activates the tab", () => {
        expect(wrapper.find(InternalTab).at(firstTabIndex)).not.toHaveProp(
          "active",
          true
        );
        expect(wrapper.find(InternalTab).at(secondTabIndex)).toHaveProp(
          "active",
          true
        );
      });

      it("renders the content of the active tab", () => {
        expect(wrapper.text()).not.toMatch("Foo");
        expect(wrapper.text()).toMatch("Bar");
      });

      describe("clicking on another tab", () => {
        beforeEach(() => {
          wrapper
            .find(InternalTab)
            .get(firstTabIndex)
            .props.activateTab(firstTabIndex);
        });

        it("calls the onTabChange callback", () => {
          expect(tabChangeHandler).toHaveBeenCalledWith(firstTabIndex);
        });

        it("does not activate the tab", () => {
          expect(wrapper.find(InternalTab).at(firstTabIndex)).not.toHaveProp(
            "active",
            true
          );
          expect(wrapper.find(InternalTab).at(secondTabIndex)).toHaveProp(
            "active",
            true
          );
        });

        it("does not render the clicked tab's content", () => {
          expect(wrapper.text()).not.toMatch("Foo");
          expect(wrapper.text()).toMatch("Bar");
        });
      });
    });
  });
});
