import React from "react";
import renderer from "react-test-renderer";
import Button from "@hig/button";

import { anchorPoints } from "./anchorPoints";
import Flyout from "./Flyout";
import PanelContainerPresenter from "./presenters/PanelContainerPresenter";

describe("flyout/Flyout", () => {
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

  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with a basic set of props",
      props: basicProps
    },
    {
      description: "renders children from the given render function",
      props: {
        ...basicProps,
        children: renderChildren
      }
    },
    {
      description: "renders content from the given render function",
      props: {
        ...basicProps,
        content: renderContent
      }
    },
    {
      description: "renders the panel from a basic render function",
      props: {
        ...basicProps,
        panel: renderPanelBasic
      }
    },
    {
      description: "renders the panel from a complex render function",
      props: {
        ...basicProps,
        children: renderChildren,
        content: renderContent,
        panel: renderPanelComplex
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <Flyout {...otherProps}>{children}</Flyout>;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
