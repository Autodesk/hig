import renderer from "react-test-renderer";
import React from "react";
import { RichText } from "../../../hig-react";

describe("RichText", () => {
  it("default", () => {
    const tree = renderer
      .create(
        <RichText>
          The RichText component lets me include any React children, including:
          <ul>
            <li>
              <strong>Any old HTML tag</strong>
            </li>
            <li>React components</li>
          </ul>
        </RichText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with prop size small", () => {
    const tree = renderer
      .create(
        <RichText size="small">
          The RichText component lets me include any React children, including:
          <ul>
            <li>
              <strong>Any old HTML tag</strong>
            </li>
            <li>React components</li>
          </ul>
        </RichText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with prop size large", () => {
    const tree = renderer
      .create(
        <RichText size="large">
          The RichText component lets me include any React children, including:
          <ul>
            <li>
              <strong>Any old HTML tag</strong>
            </li>
            <li>React components</li>
          </ul>
        </RichText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
