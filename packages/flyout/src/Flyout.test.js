import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";
import Button from "@hig/button";

import { anchorPoints } from "./anchorPoints";
import Flyout from "./Flyout";
import PanelContainerPresenter from "./presenters/PanelContainerPresenter";

describe("flyout/Flyout", () => {
  describe("snapshots", () => {
    const basicProps = {
      anchorPoint: anchorPoints.TOP_CENTER,
      children: <Button title="Click Me" />,
      content: "Hello World",
      maxHeight: 150,
      onClickOutside: function onClickOutside() {},
      onScroll: function onScroll() {},
      open: true
    };
    const MyCustomContainer = jest.fn(({ children, onScroll, maxHeight }) => (
      <div
        data-mock="MyCustomContainer"
        onScroll={onScroll}
        style={{ maxHeight }}
      >
        {children}
      </div>
    ));
    const renderContent = jest.fn(() => "Content from render prop");
    const renderPanelBasic = jest.fn(({ content }) => <div>{content}</div>);
    const renderChildren = jest.fn(({ handleClick }) => (
      <Button onClick={handleClick} title="Render prop" />
    ));
    const renderPanelComplex = jest.fn(
      ({ innerRef, content, handleScroll, maxHeight }) => (
        <PanelContainerPresenter innerRef={innerRef}>
          <MyCustomContainer onScroll={handleScroll} style={{ maxHeight }}>
            {content}
          </MyCustomContainer>
        </PanelContainerPresenter>
      )
    );

    takeSnapshotsOf(Flyout, [
      {
        desc: "renders without props",
        props: {}
      },
      {
        desc: "renders with a basic set of props",
        props: basicProps
      },
      {
        desc: "renders children from the given render function",
        props: {
          ...basicProps,
          children: renderChildren
        }
      },
      {
        desc: "renders content from the given render function",
        props: {
          ...basicProps,
          content: renderContent
        }
      },
      {
        desc: "renders the panel from a basic render function",
        props: {
          ...basicProps,
          panel: renderPanelBasic
        }
      },
      {
        desc: "renders the panel from a complex render function",
        props: {
          ...basicProps,
          children: renderChildren,
          content: renderContent,
          panel: renderPanelComplex
        }
      }
    ]);
  });

  describe("handleChildClick", () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    function getHandler() {
      let handleChildClick;
      const wrapper = mount(
        <Flyout onOpen={handleOpen} onClose={handleClose}>
          {({ handleClick }) => {
            handleChildClick = handleClick;
          }}
        </Flyout>
      );

      return { handleChildClick, wrapper };
    }

    afterEach(() => {
      handleOpen.mockReset();
      handleClose.mockReset();
    });

    it("toggles the flyout between open and closed", () => {
      const { handleChildClick, wrapper } = getHandler();

      expect(wrapper.state()).toHaveProperty("open", false);
      handleChildClick();
      expect(wrapper.state()).toHaveProperty("open", true);
      handleChildClick();
      expect(wrapper.state()).toHaveProperty("open", false);
    });

    it("calls the `onOpen` handler when the flyout is opened", () => {
      const { handleChildClick } = getHandler();

      expect(handleOpen).not.toHaveBeenCalled();
      handleChildClick();
      expect(handleOpen).toHaveBeenCalled();
    });

    it("calls the `onClose` handler when the flyout is closed", () => {
      const { handleChildClick } = getHandler();

      expect(handleClose).not.toHaveBeenCalled();
      handleChildClick();
      expect(handleClose).not.toHaveBeenCalled();
      handleChildClick();
      expect(handleClose).toHaveBeenCalled();
    });
  });

  describe("alterCoordinates", () => {
    const alterCoordinates = jest.fn();

    beforeEach(() => {
      alterCoordinates.mockImplementation(coordinates => coordinates);
    });

    afterEach(() => {
      alterCoordinates.mockReset();
    });

    it("is called when rendering", () => {
      mount(<Flyout alterCoordinates={alterCoordinates} />);

      expect(alterCoordinates).toHaveBeenCalledWith(
        {
          anchorPoint: "top-left",
          containerPosition: { left: 0, top: 7 },
          pointerPosition: { left: -7, top: -5 }
        },
        {
          actionRect: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
          },
          panelRect: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
          },
          viewportRect: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
          }
        }
      );
    });
  });
});
