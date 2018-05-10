import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import AutoResizer from "./AutoResizer";

describe("AutoResizer", () => {
  let children;

  beforeEach(() => {
    children = jest.fn(props => <table {...props} />);
  });

  [
    {
      description: "renders with no props",
      props: {}
    },
    {
      description: "renders with a class name",
      props: { className: "foo" }
    },
    {
      description: "renders with a width",
      props: { width: 111 }
    },
    {
      description: "renders with a height",
      props: { height: 222 }
    },
    {
      description: "renders with a width and height",
      props: { width: 111, height: 222 }
    }
  ].forEach(({ description, props }) => {
    it(description, () => {
      const tree = renderer
        .create(<AutoResizer {...props}>{children}</AutoResizer>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("when the component updates", () => {
    let onResize;
    let props;

    beforeEach(() => {
      onResize = jest.fn();
      props = {
        width: 111,
        height: 222,
        onResize
      };
    });

    it("calls the onResize prop", () => {
      const wrapper = shallow(<AutoResizer>{children}</AutoResizer>, {
        lifecycleExperimental: true
      });

      expect(onResize).not.toBeCalled();

      wrapper.setProps({ ...props, width: 333 });

      expect(onResize).toBeCalledWith({ width: 333, height: 222 });
    });
  });
});
