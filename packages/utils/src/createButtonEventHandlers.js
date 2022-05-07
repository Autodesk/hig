/**
 * @typedef {Object} ButtonEventHandlers
 * @property {function(MouseEvent, ...any): void} handleClick
 * @property {function(KeyboardEvent, ...any): void} handleKeyDown
 */

/**
 * @typedef {Object} Options
 * @property {boolean} [preventDefault]
 */

const KEYBOARD_INTERACTIONS = [" ", "Enter"];

/**
 * Create event handlers for native button behavior for non-button elements
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
 *
 * @param {function(MouseEvent|KeyboardEvent, ...any): void} [handler] the event handler function
 * @param {Options} [options]
 * @returns {ButtonEventHandlers}
 */
export default function createButtonEventHandlers(handler, options = {}) {
  if (!handler) return {};

  const { preventDefault = true } = options;

  return {
    handleClick: handler,
    handleKeyDown(event, ...args) {
      const { key } = event;

      if (!KEYBOARD_INTERACTIONS.includes(key)) return;
      // Prevent space key default scrolling behavior
      if (preventDefault) event.preventDefault();

      handler(event, ...args);
    },
  };
}
