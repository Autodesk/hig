import { text } from "@storybook/addon-knobs/react";

/**
 * Knob for controlled string props
 * @param {string} label
 * @param {string|undefined} defaultValue
 * @param {string} group
 * @returns {string|undefined}
 */
export default function controlledText(label, defaultValue, group) {
  const result = text(label, defaultValue, group);

  return result || undefined;
}
