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

import DropdownComponent from "./DropdownAdapter";
const OptionComponent = DropdownComponent.Option;

const inputId = "text-field-5678";

describe("<DropdownAdapter>", () => {
  function createHigContext(props) {
    const higContainer = document.createElement("div");

    const higDropdown = new HIG.Dropdown(props);
    higDropdown.mount(higContainer);

    const higOption = new higDropdown.partials.Option({
      label: props.option.label,
      value: props.option.value
    });

    higDropdown.addOption(higOption);

    setLabelForInputId(higContainer);

    return { higContainer, higDropdown: higDropdown, higOption: higOption };
  }

  function setLabelForInputId(higContainer) {
    // to adjust for the randomly generated id
    const labels = higContainer.querySelectorAll("label");

    [].forEach.call(labels, function(label) {
      label.setAttribute("for", inputId);
    });

    const input = higContainer.querySelector("input");
    input.setAttribute("id", inputId);
  }

  const Context = props => {
    return (
      <DropdownComponent
        label={props.label}
        placeholder={props.placeholder}
        instructions={props.instructions}
      >
        <OptionComponent
          label={props.option.label}
          value={props.option.value}
        />
      </DropdownComponent>
    );
  };

  const UpdatedContext = props => {
    const {option, ...dropdownProps } = props;
    return (
      <DropdownComponent {...dropdownProps}>
        <OptionComponent {...option} />
      </DropdownComponent>
    );
  };

  const EventListenerContext = props => {
    return (
      <DropdownComponent {...props}>
        <OptionComponent {...props} />
      </DropdownComponent>
    );
  };

  it("renders a dropdown with initial props", () => {
    const defaults = {
      label: "dropdown label",
      placeholder: "dropdown placeholder",
      instructions: "instructions for dropdown",
      option: {
        label: "option label",
        value: "option value"
      }
    };
    const { higContainer, higDropdown, higOption } = createHigContext(defaults);
    const container = document.createElement("div");
    const wrapper = mount(Context(defaults), {
      attachTo: container
    });

    setLabelForInputId(container);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("renders a dropdown with updated props", () => {
    const defaults = {
      label: "dropdown label",
      placeholder: "dropdown placeholder",
      instructions: "instructions for dropdown",
      option: {
        label: "option-label",
        value: "option-value"
      }
    };

    const { higContainer, higDropdown, higOption } = createHigContext(defaults);
    const container = document.createElement("div");
    const wrapper = mount(<UpdatedContext {...defaults} />, {
      attachTo: container
    });

    setLabelForInputId(container);

    const option = {
      label: "updated option label",
      value: "updated option value"
    };

    const nextProps = {
      label: "updated dropdown label",
      placeholder: "updated dropdown placeholder",
      instructions: "updated instructions for dropdown",
      selectedOptionLabel: option.label,
      option: {
        label: option.label,
        value: option.value,
        selected: true
      }
    };

    higDropdown.setLabel(nextProps.label);
    higDropdown.setPlaceholder(nextProps.placeholder);
    higDropdown.setInstructions(nextProps.instructions);
    higDropdown.setSelectedOptionLabel(nextProps.option.label);
    higOption.setLabel(nextProps.option.label);
    higOption.setValue(nextProps.option.value);
    higOption.select();

    const prevProps = wrapper.props;
    wrapper.setProps(nextProps);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it("renders a disabled", () => {
    const defaults = {
      label: "dropdown label",
      placeholder: "dropdown placeholder",
      instructions: "instructions for dropdown",
      disabled: true,
      option: { label: "option-label", value: "option-value" }
    };

    const { higContainer, higDropdown, higOption } = createHigContext(defaults);
    const container = document.createElement("div");
    const wrapper = mount(<UpdatedContext {...defaults} />, {
      attachTo: container
    });

    higDropdown.disable();
    setLabelForInputId(container);

    expect(container.firstElementChild.outerHTML).toMatchSnapshot();
    expect(container.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  [
    "onBlur",
    "onTargetClick",
    "onClickOutside",
    "onKeypress",
    "onFocus"
  ].forEach(eventName => {
    it(`sets event listeners for ${eventName} initially`, () => {
      const spy = jest.fn();
      const container = document.createElement("div");
      const wrapper = mount(EventListenerContext({ [eventName]: spy }), {
        attachTo: container
      });
      setLabelForInputId(container);

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        eventName + "Dispose"
      );
      expect(disposeFunction).toBeDefined();
    });

    it(`sets event listeners for ${eventName} when updated`, () => {
      const spy = jest.fn();
      const container = document.createElement("div");
      const wrapper = mount(EventListenerContext({}), {
        attachTo: container
      });
      setLabelForInputId(container);

      wrapper.setProps({ [eventName]: spy });

      const instance = wrapper.instance().instance;

      const disposeFunction = instance._disposeFunctions.get(
        eventName + "Dispose"
      );
      expect(disposeFunction).toBeDefined();
    });
  });
});
