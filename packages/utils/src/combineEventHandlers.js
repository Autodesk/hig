/**
 * Combines multiple event handlers into one
 * @param {...function(...any)} handlers the event handler functions
 * @returns {function(...any)} An event handler to add to an element
 */
export default function combineEventHandlers(...handlers) {
  return (...args) => {
    handlers.forEach(handler => {
      handler(...args);
    });
  };
}
