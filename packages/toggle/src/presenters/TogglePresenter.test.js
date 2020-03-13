import React from "react";
import renderer from "react-test-renderer";
import TogglePresenter from "./TogglePresenter";

function customStylesheet(styles) {
  return {
    ...styles,
    toggleWrapper: {
      ...styles.toggleWrapper,
      borderColor: "blue"
    }
  };
}

describe("toggle/presenters/TogglePresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        on: true,
        defaultOn: true,
        stylesheet: customStylesheet
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <TogglePresenter {...otherProps} />;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
