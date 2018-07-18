import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

import infoOptions from "./infoOptions";
import Checkbox from "../Checkbox";

const stories = [
  {
    description: "default",
    getProps: () => ({
      ...Checkbox.defaultProps,
      label: "Default checkbox"
    })
  },
  {
    description: "checked",
    getProps: () => ({
      label: "Checked",
      checked: true
    })
  },
  {
    description: "required",
    getProps: () => ({
      label: "Required",
      required: "You must check this box"
    })
  },
  {
    description: "disabled",
    getProps: () => ({
      disabled: true,
      label: "Disabled"
    })
  },
  {
    description: "indeterminate",
    getProps: () => ({
      indeterminate: true,
      label: "Indeterminate"
    })
  }
];

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  checked: "Checked",
  defaultChecked: "Initially Checked",
  disabled: "Disabled",
  indeterminate: "Indeterminate",
  label: "Label",
  name: "Name",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  required: "Required",
  value: "Value"
};

function getKnobs(props) {
  const {
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    label,
    name,
    required,
    value,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    checked: boolean(knobLabels.checked, checked, knobGroupIds.basic),
    defaultChecked: boolean(
      knobLabels.defaultChecked,
      defaultChecked,
      knobGroupIds.basic
    ),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    indeterminate: boolean(
      knobLabels.indeterminate,
      indeterminate,
      knobGroupIds.basic
    ),
    label: text(knobLabels.label, label, knobGroupIds.basic),
    name: text(knobLabels.name, name, knobGroupIds.form),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}

const storybook = storiesOf("Forms|Checkbox", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo(infoOptions)(() => {
      const props = getProps();
      const { children, ...otherProps } = getKnobs(props);
      return <Checkbox {...otherProps}>{children}</Checkbox>;
    })
  );
});
