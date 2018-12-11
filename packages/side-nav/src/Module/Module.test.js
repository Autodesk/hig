import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";

import Module from "./Module";

describe("side-nav/Module", () => {
  describe("onClickTitle", () => {
    it("adds click handler to title", () => {
      const onClickTitle = jest.fn();
      const wrapper = mount(
        <Module title="Module" onClickTitle={onClickTitle} />
      );

      wrapper.find(".hig__side-nav__module__link__title").simulate("click");
      expect(onClickTitle).toHaveBeenCalled();
    });
  });

  describe("onClickCollapseButton", () => {
    it("adds click handler to collapse button", () => {
      const onClickCollapseButton = jest.fn();
      const wrapper = mount(
        <Module title="Module" onClickCollapseButton={onClickCollapseButton}>
          Content
        </Module>
      );

      wrapper.find(".hig__side-nav__module__collapse-button").simulate("click");
      expect(onClickCollapseButton).toHaveBeenCalled();
    });
  });

  describe("snapshot tests", () => {
    takeSnapshotsOf(Module, [
      {
        description: "renders with minimal props",
        props: {
          title: "Module"
        }
      },
      {
        description: "renders an external link",
        props: {
          link: "http://example.com",
          target: "_blank",
          title: "Module"
        }
      },
      {
        description: "renders a link",
        props: {
          link: "http://example.com",
          title: "Module"
        }
      },
      {
        description: "renders a expanded menu with active children",
        props: {
          activeChildren: true,
          children: <div data-test="children" />,
          icon: <div data-test="icon" />,
          title: "Module"
        }
      },
      {
        description: "renders with a click handlers",
        props: {
          onClickCollapseButton: function handleClickCollapseButton() {},
          onClickTitle: function handleClickTitle() {},
          title: "Module"
        }
      },
      {
        description: "renders an active button",
        props: {
          active: true,
          icon: <span data-test="icon" />,
          onClickCollapseButton: function handleClickCollapseButton() {},
          onClickTitle: function handleClickTitle() {},
          title: "Module"
        }
      }
    ]);
  });
});
