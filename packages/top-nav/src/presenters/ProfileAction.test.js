import React from "react";
import renderer from "react-test-renderer";

import ProfileAction from "./ProfileAction";

describe("top-nav/ProfileAction", () => {
  const cases = [
    {
      description: "renders with avatarName",
      props: {
        avatarName: "Wolfgang Pauli"
      }
    },
    {
      description: "renders with children and avatarName",
      props: {
        avatarName: "Hans Hellmann",
        children: <div className="logo" />
      }
    },
    {
      description: "renders with all props",
      props: {
        avatarName: "Richard Feynman",
        avatarImage: "richard_phillips_feynman.png",
        children: <div className="logo" />,
        onClick: () => {}
      }
    }
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const tree = renderer.create(<ProfileAction {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
