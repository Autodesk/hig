/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import React from "react";

import GridComponent from "./GridAdapter";
import GridItem from "../elements/components/GridItem";

describe("TableAdapter", () => {
  function createHigContext(props) {
    const higContainer = document.createElement("div");
    const higGrid = new HIG.Grid();
    higGrid.mount(higContainer);
    const higGridItem = new higGrid.partials.GridItem({
      fraction: props.value
    });

    higGrid.addGridItem(higGridItem);
    const extraDiv = document.createElement("div");

    const gridItemContent = document.createElement("div");
    gridItemContent.innerHTML = props.value;
    higGridItem.addSlot(gridItemContent);

    return {
      higContainer,
      higGrid,
      higGridItem,
      gridItemContent
    };
  }

  const Context = props => {
    return (
      <GridComponent>
        <GridItem fraction={props.value}>{props.value}</GridItem>
      </GridComponent>
    );
  };

  it("renders a grid", () => {
    const props = {
      value: "one-whole"
    };
    const {
      higContainer,
      higGrid,
      higGridItem,
      gridItemContent
    } = createHigContext(props);
    const container = document.createElement("div");
    const wrapper = mount(<Context {...props} />, {
      attachTo: container
    });

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("renders a grid with updated props", () => {
    const props = {
      value: "one-whole"
    };
    const {
      higContainer,
      higGrid,
      higGridItem,
      gridItemContent
    } = createHigContext(props);
    const container = document.createElement("div");
    const wrapper = mount(<Context {...props} />, {
      attachTo: container
    });

    const newProps = {
      value: "one-twelfth"
    };

    higGridItem.setFraction(newProps.value);
    gridItemContent.innerHTML = newProps.value;

    const prevProps = wrapper.props;
    wrapper.setProps(newProps);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
