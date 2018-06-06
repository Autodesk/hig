/**
 * Composes multiple event handlers into one.
 * @param {Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */
export default function composeEventHandlers(...fns) {
  return (event, ...args) => fns.forEach(fn => fn && fn(event, ...args));
}
