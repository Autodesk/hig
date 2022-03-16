import React from "react";
import renderer from "react-test-renderer";
import { Settings24 } from "@hig/icons";
import { shallow } from "enzyme";
import Tab from "./Tab";
import Tabs from "./Tabs";
import ContentPresenter from "./presenters/ContentPresenter";
import { alignments, variants, orientations } from "./constants";

describe("tabs/Tabs", () => {
  it("renders horizontal box style tabs", () => {
    const wrapper = (
      <Tabs
        align={alignments.RIGHT}
        variant={variants.BOX}
        orientation={orientations.HORIZONTAL}
      >
        <Tab key="foo" label="foo" onClick={() => {}}>
          bar
        </Tab>
        <Tab key="active" label="active" active>
          active
        </Tab>
        <Tab
          key="render"
          label="render"
          render={({ key }) => <button key={key} type="button" />}
        >
          render
        </Tab>
        <Tab key="withicon" label="withicon" icon={<Settings24 />}>
          with icon
        </Tab>
        <Tab key="icononly" label="icononly" icon={<Settings24 />}>
          icon only
        </Tab>
        <Tab key="disabled" label="disabled" disabled>
          disabled
        </Tab>
        <Tab key="closable" label="closable" closable>
          closable
        </Tab>
      </Tabs>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders vertical box style tabs", () => {
    const wrapper = (
      <Tabs
        align={alignments.RIGHT}
        variant={variants.BOX}
        orientation={orientations.HORIZONTAL}
      >
        <Tab key="foo" label="foo">
          bar
        </Tab>
        <Tab key="active" label="active" active>
          active
        </Tab>
        <Tab key="withicon" label="withicon" icon={<Settings24 />}>
          with icon
        </Tab>
        <Tab key="icononly" label="icononly" icon={<Settings24 />}>
          icon only
        </Tab>
        <Tab key="disabled" label="disabled" disabled>
          disabled
        </Tab>
        <Tab key="closable" label="closable" closable>
          closable
        </Tab>
      </Tabs>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders underline style tabs", () => {
    const wrapper = (
      <Tabs variant={variants.UNDERLINE}>
        <Tab key="foo" label="foo">
          bar
        </Tab>
        <Tab key="active" label="active" active>
          active
        </Tab>
        <Tab key="disabled" label="disabled" disabled>
          disabled
        </Tab>
      </Tabs>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders canvas style tabs", () => {
    const wrapper = (
      <Tabs variant={variants.CANVAS}>
        <Tab key="foo" label="foo">
          bar
        </Tab>
        <Tab key="active" label="active" active>
          active
        </Tab>
        <Tab key="withicon" label="withicon" icon={<Settings24 />}>
          with icon
        </Tab>
        <Tab key="icononly" label="icononly" icon={<Settings24 />}>
          icon only
        </Tab>
        <Tab key="disabled" label="disabled" disabled>
          disabled
        </Tab>
        <Tab key="closable" label="closable" closable>
          closable
        </Tab>
      </Tabs>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom className", () => {
    const wrapper = (
      <Tabs className="class1 class2">
        <Tab key="foo" label="foo">
          bar
        </Tab>
        <Tab key="hello" label="hello">
          world
        </Tab>
      </Tabs>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("onTabChange", () => {
    it("should be called when a tab is clicked", () => {
      const mockOnTabChange = jest.fn();
      const tabs = shallow(
        <Tabs onTabChange={mockOnTabChange}>
          <Tab key="foo" label="foo">
            foo
          </Tab>
          <Tab key="bar" label="bar">
            bar
          </Tab>
          <Tab key="baz" label="baz">
            baz
          </Tab>
        </Tabs>
      );

      const allTabs = tabs.find(Tab);
      const fooTab = allTabs.findWhere(tab => tab.prop("label") === "foo");
      const barTab = allTabs.findWhere(tab => tab.prop("label") === "bar");
      const bazTab = allTabs.findWhere(tab => tab.prop("label") === "baz");

      barTab.prop("handleClick")();
      expect(mockOnTabChange).toHaveBeenCalledTimes(1);
      expect(mockOnTabChange).toHaveBeenCalledWith(1);

      mockOnTabChange.mockReset();
      bazTab.prop("handleClick")();
      expect(mockOnTabChange).toHaveBeenCalledTimes(1);
      expect(mockOnTabChange).toHaveBeenCalledWith(2);

      mockOnTabChange.mockReset();
      fooTab.prop("handleClick")();
      expect(mockOnTabChange).toHaveBeenCalledTimes(1);
      expect(mockOnTabChange).toHaveBeenCalledWith(0);
    });
  });

  describe("active tab", () => {
    const children = [
      <Tab key="foo" label="foo">
        foo
      </Tab>,
      <Tab key="bar" label="bar">
        bar
      </Tab>,
      <Tab key="baz" label="baz">
        baz
      </Tab>
    ];

    const checkActiveTab = (shallowTabs, expectedIndex) => {
      const tabs = ["foo", "bar", "baz"];
      const expectedActiveTab = tabs[expectedIndex];
      const activeTab = shallowTabs
        .find(Tab)
        .findWhere(tab => tab.prop("active"));
      expect(activeTab.prop("label")).toEqual(expectedActiveTab);

      const contentPresenter = shallowTabs.find(ContentPresenter);
      expect(contentPresenter.html()).toContain(expectedActiveTab);
    };

    describe("Tab => active", () => {
      it("should set the initial active tab", () => {
        const tabs = shallow(
          <Tabs>
            {[
              children[0],
              React.cloneElement(children[1], { active: true }),
              children[2]
            ]}
          </Tabs>
        );
        checkActiveTab(tabs, 1);
      });

      it("should not take effect when defaultActiveTabIndex is specified", () => {
        const tabs = shallow(
          <Tabs defaultActiveTabIndex={2}>
            {[
              children[0],
              React.cloneElement(children[1], { active: true }),
              children[2]
            ]}
          </Tabs>
        );
        checkActiveTab(tabs, 2);
      });

      it("should not take effect when defaultActiveTabIndex is specified", () => {
        const tabs = shallow(
          <Tabs activeTabIndex={2}>
            {[
              children[0],
              React.cloneElement(children[1], { active: true }),
              children[2]
            ]}
          </Tabs>
        );
        checkActiveTab(tabs, 2);
      });
    });

    describe("defaultActiveTabIndex", () => {
      it("should set the initial active tab", () => {
        const tabs = shallow(<Tabs defaultActiveTabIndex={1}>{children}</Tabs>);
        checkActiveTab(tabs, 1);
      });

      it("should not take effect when activeTabIndex is specified", () => {
        const tabs = shallow(
          <Tabs activeTabIndex={0} defaultActiveTabIndex={1}>
            {children}
          </Tabs>
        );
        checkActiveTab(tabs, 0);
      });

      it("should take priority over the active prop on a Tab", () => {
        const tabs = shallow(
          <Tabs defaultActiveTabIndex={1}>
            {[
              React.cloneElement(children[0], { active: true }),
              children[1],
              children[2]
            ]}
          </Tabs>
        );
        checkActiveTab(tabs, 1);
      });
    });

    describe("activeTabIndex", () => {
      describe("basic", () => {
        const tabs = shallow(<Tabs activeTabIndex={1}>{children}</Tabs>);
        it("should set the initial active tab", () => {
          checkActiveTab(tabs, 1);
        });

        it("should update the active tab", () => {
          tabs.setProps({ activeTabIndex: 0 });
          checkActiveTab(tabs, 0);
          tabs.setProps({ activeTabIndex: 2 });
          checkActiveTab(tabs, 2);
          tabs.setProps({ activeTabIndex: 0 });
          checkActiveTab(tabs, 0);
          tabs.setProps({ activeTabIndex: 1 });
          checkActiveTab(tabs, 1);
        });
      });

      it("should take priority over defaultActiveTabIndex prop", () => {
        const tabs = shallow(
          <Tabs activeTabIndex={2} defaultActiveTabIndex={1}>
            {children}
          </Tabs>
        );
        checkActiveTab(tabs, 2);
      });

      it("should take priority over the active prop on a Tab", () => {
        const tabs = shallow(
          <Tabs activeTabIndex={1}>
            {[
              React.cloneElement(children[0], { active: true }),
              children[1],
              children[2]
            ]}
          </Tabs>
        );
        checkActiveTab(tabs, 1);
      });
    });
  });
});
