import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import Dropdown from "./DropdownAdapter";

const Option = Dropdown.Option;

const OptionData = [
  { label: "text option label", value: "test option value", selected: true },
  {
    label: "text option label 1",
    value: "test option value 1",
    selected: false
  }
];

storiesOf("Dropdown", module)
  .addWithInfo("default dropdown open with options", "", () => {
    return (
      <Dropdown
        instructions="test instructions"
        label="Dropdown Label"
        selectedOptionLabel={OptionData[0].label}
        open={true}
        onTargetClick={action("Target clicked")}
        onClickOutside={action("onClick outside")}
        onBlur={action("on Blur")}
        onFocus={action("on Focus")}
        onKeyPress={action("onKeypress")}
      >
        <Option
          label={OptionData[0].label}
          value={OptionData[0].value}
          selected={true}
        />
        <Option
          label={OptionData[1].label}
          value={OptionData[1].value}
          selected={false}
        />
      </Dropdown>
    );
  })
  .addWithInfo("default dropdown closed with options", "", () => {
    return (
      <Dropdown
        instructions="test instructions"
        label="Dropdown Label"
        selectedOptionLabel={OptionData[0].label}
        open={false}
        onTargetClick={action("Target clicked")}
        onClickOutside={action("onClick outside")}
        onBlur={action("on Blur")}
        onFocus={action("on Focus")}
        onKeyPress={action("onKeypress")}
      >
        <Option
          label={OptionData[0].label}
          value={OptionData[0].value}
          selected={true}
        />
        <Option
          label={OptionData[1].label}
          value={OptionData[1].value}
          selected={false}
        />
      </Dropdown>
    );
  })
  .addWithInfo("disabled dropdown", "", () => {
    return (
      <Dropdown
        instructions="test instructions"
        label="Dropdown Label"
        selectedOptionLabel={OptionData[0].label}
				disabled={true	}
        open={false}
        onTargetClick={action("Target clicked")}
        onClickOutside={action("onClick outside")}
        onBlur={action("on Blur")}
        onFocus={action("on Focus")}
        onKeyPress={action("onKeypress")}
      >
        <Option
          label={OptionData[0].label}
          value={OptionData[0].value}
          selected={true}
        />
        <Option
          label={OptionData[1].label}
          value={OptionData[1].value}
          selected={false}
        />
      </Dropdown>
    );
  });
	
