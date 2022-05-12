/**
 * @param {Array<function(...any): void>} handlers the event handler functions
 * @returns {function(...any): void} An event handler to add to an element
 */
function createAggregateEventHandler(handlers) {
  /**
   * This function needed to be moved out of `combineEventHandlers`
   * since babel doesn't handle nested functions using rest operators
   * properly.
   */
  return function aggregateEventHandler(...args) {
    handlers.forEach((handler) => {
      if (handler) handler(...args);
    });
  };
}

/**
 * Combines multiple event handlers into one
 * @param {...function(...any): void} handlers the event handler functions
 * @returns {function(...any): void} An event handler to add to an element
 */
export default function combineEventHandlers(...handlers) {
  return createAggregateEventHandler(handlers);
}
