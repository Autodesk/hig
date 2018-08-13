import { select } from "@storybook/addon-knobs/react";

const options = {
  uncontrolled: "(uncontrolled)",
  true: "Yes",
  false: "No"
};

const valuesByOption = {
  uncontrolled: undefined,
  true: true,
  false: false
};

/**
 * Knob for controlled boolean props
 * @param {string} label
 * @param {boolean|undefined} defaultValue
 * @param {string} group
 * @returns {boolean|undefined}
 */
export default function controlledBool(label, defaultValue, group) {
  const checkedOption = select(label, options, defaultValue, group);

  return valuesByOption[checkedOption];
}
