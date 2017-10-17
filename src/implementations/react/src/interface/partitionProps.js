/**
 * Takes reactProps and an interface and returns props
 * @param {React.Properties} reactProps
 * @param {hig-vanilla.Interface} _interface
 *
 * - Returns an object which has a defaults, events and possibleEvent keys
 *
 * @example
 *
 *  const reactProps = { title: 'Hello', onClick: Function };
 *  const _interface = {
 *    defaults: {
 *      title: 'something'
 *    },
 *
 *    methods: {
 *      onClick: 'HIG.abstract.EventObject',
 *      onHover: 'HIG.abstract.EventObject'
 *    }
 *  }
 *
 * const { defaults, events, possibleEvents } = inspectProps(reactProps, _interface)
 *
 * > defaults === { title: 'Hello' }
 * > events === { onClick: Function }
 * > possibleEvents ==== ['onClick', 'onHover']
 */
export default function partitionProps(reactProps, _interface) {
  // sometimes defaults is undefined
  const propKeys = Object.keys(_interface.defaults || {});

  // Narrow props down to just defaults
  const defaults = Object.keys(reactProps)
    .filter(prop => propKeys.indexOf(prop) !== -1)
    .reduce((acc, memo) => {
      acc[memo] = reactProps[memo];
      return acc;
    }, {});

  // set up events
  const possibleEvents = Object.keys(_interface.methods).filter(
    methodName =>
      _interface.methods[methodName].returns ===
      "HIG.abstract.EventObject.returns"
  );

  // Narrow props down to just events
  const events = Object.keys(reactProps)
    .filter(prop => possibleEvents.indexOf(prop) !== -1)
    .reduce((acc, memo) => {
      acc[memo] = reactProps[memo];
      return acc;
    }, {});

  return { defaults, events, possibleEvents };
}
