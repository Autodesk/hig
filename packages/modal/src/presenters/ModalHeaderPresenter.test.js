import React from "react";
import renderer from "react-test-renderer";
import { generateId } from "@hig/utils";
import ModalHeaderPresenter from "./ModalHeaderPresenter";

describe("checkbox/presenters/ModalHeaderPresenter", () => {
  afterEach(() => {
    generateId.mockReset();
  });

  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with children",
      props: {
        children: [<p key="p">Title</p>]
      }
    },
    {
      description: "renders with all props",
      props: {
        title: "HELLO",
        onCloseClick: function onCloseClick() {}
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <ModalHeaderPresenter {...otherProps}>{children}</ModalHeaderPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
