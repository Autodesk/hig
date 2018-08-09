import React from "react";
import renderer from "react-test-renderer";
import { generateId } from "@hig/utils";
import ModalPresenter from "./ModalPresenter";

describe("checkbox/presenters/ModalPresenter", () => {
  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with header children",
      props: {
        children: [<p key="p">Body</p>],
        headerChildren: [<h1 key="h1">Title</h1>],
        onCloseClick: function onCloseClick() {}
      }
    },
    {
      description: "renders with all props",
      props: {
        children: [<p key="p">Body</p>],
        title: "Title",
        onCloseClick: function onCloseClick() {}
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <ModalPresenter {...otherProps}>{children}</ModalPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
