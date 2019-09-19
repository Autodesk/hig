import React from "react";
import renderer from "react-test-renderer";
import { Settings24 } from "@hig/icons";

import Tab from "./Tab";
import Tabs from "./Tabs";
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
          render={({ key }) => <button key={key} />}
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
});
