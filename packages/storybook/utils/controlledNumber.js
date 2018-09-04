import { text } from "@storybook/addon-knobs/react";

/**
 * Knob for controlled number props
 * @param {string} label
 * @param {string|undefined} defaultValue
 * @param {string} group
 * @returns {string|undefined}
 */
export default function controlledNumber(label, defaultValue, group) {
  const parseDefaultValue = defaultValue == null ? "" : defaultValue.toString();
  const result = text(label, parseDefaultValue, group);

  return result ? Number(result) : undefined;
}
