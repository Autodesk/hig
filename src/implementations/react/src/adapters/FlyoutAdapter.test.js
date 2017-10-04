import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import React from "react";
import Flyout from "../elements/components/Flyout";
import ButtonComponent from "./NewButtonAdapter";

function myFlyoutContent() {
  return <div>Important flyout information</div>;
}

function higFlyoutcontent() {
  var flyoutContent = document.createElement("div");
  var extraDiv = document.createElement("div");
  flyoutContent.appendChild(extraDiv);
  extraDiv.textContent = "Important flyout information";
  return flyoutContent;
}

describe("FlyoutAdapter", () => {
  const Context = props => {
    return (
      <Flyout anchorPoint={props.anchorPoint} content={props.content}>
        <div>{props.targetContent}</div>
      </Flyout>
    );
  };

  function createHigComponent(initialProps = {}) {
    const higContainer = document.createElement("div");
    const flyout = new HIG.Flyout({ anchorPoint: initialProps.anchorPoint });
    flyout.mount(higContainer);
    flyout.addSlot(initialProps.content);

    const wrapperDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    wrapperDiv.appendChild(contentDiv);
    contentDiv.textContent = initialProps.targetContent;

    flyout.addTarget(wrapperDiv);

    return { higComponent: flyout, higContainer };
  }

  it("renders with props", () => {
    const orionProps = {
      anchorPoint: "bottom-left",
      content: myFlyoutContent(),
      buttonTitle: "open Flyout",
      targetContent: "Test Test Test"
    };

    const higProps = {
      anchorPoint: "bottom-left",
      content: higFlyoutcontent(),
      buttonTitle: "open Flyout",
      targetContent: "Test Test Test"
    };

    const { higComponent, higContainer } = createHigComponent(higProps);
    const container = document.createElement("div");
    const wrapper = mount(Context(orionProps), {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();

    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("renders with non-default props", () => {
    const orionProps = {
      anchorPoint: "bottom-left",
      content: myFlyoutContent(),
      targetContent: "Test Test Test"
    };

    const higProps = {
      anchorPoint: "bottom-left",
      content: higFlyoutcontent(),
      targetContent: "Test Test Test"
    };

    const newOrionProps = {
      anchorPoint: "top-left",
      content: myFlyoutContent(),
      targetContent: "New Test"
    };

    const newHigProps = {
      anchorPoint: "top-left",
      content: higFlyoutcontent(),
      targetContent: "Test Test Test"
    }


    const { higComponent, higContainer } = createHigComponent(higProps);
    const container = document.createElement("div");
    const wrapper = mount(Context(orionProps), {
      attachTo: container
    });

    higComponent.setAnchorPoint(newHigProps.anchorPoint);

    const prevProps = wrapper.props;
    wrapper.setProps(newOrionProps);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
