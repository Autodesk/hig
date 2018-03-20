import React from "react";
import { shallow } from "enzyme";
import Avatar from "./index";

describe("Avatar", () => {
  it("renders initials of the provided name", () => {
    const wrapper = shallow(<Avatar name="Jon Snow" size="large" />);
    expect(wrapper).toIncludeText("JS");
  });

  it("can render an image, when provided", () => {
    const withoutImage = shallow(<Avatar name="Jon Snow" size="large" />);
    expect(withoutImage.find(".hig__avatar__image")).toHaveLength(0);

    const withImage = shallow(
      <Avatar
        name="Jon Snow"
        size="large"
        image="http://placekitten.com/g/64/64"
      />
    );
    expect(withImage.find(".hig__avatar__image")).toHaveLength(1);
  });
});
