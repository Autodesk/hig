import { text } from "@storybook/addon-knobs/react";

/**
 * Knob for controlled JSON props
 * @param {string} label
 * @param {string|undefined} defaultValue
 * @param {string} group
 * @returns {string|undefined}
 */
export default function controlledObject(label, defaultValue, group) {
  const result = text(label, defaultValue, group);

  return result ? JSON.parse(result) : undefined;
}
