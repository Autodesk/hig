/**
 * Takes reactProps and an interface and returns props
 * @param {React.Properties} reactProps
 * @param {HIG.Web.Interface} _interface
 *
 * - Returns an object which has a defaults and events keys
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
 *      onClick: 'HIG.Abstract.EventObject'
 *    }
 *  }
 *
 * const { defaults, events } = inspectProps(reactProps, _interface)
 *
 * > defaults === { title: 'Hello' }
 * > events === { onClick: Function }
 */
export default function partitionProps(reactProps, _interface) {
  // sometimes defaults is undefined
  const propKeys = Object.keys(_interface.defaults || {});

  // Narrow props down to just defaults
  const defaults = Object.keys(reactProps)
    .filter(prop => propKeys.indexOf(prop) !== -1)
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  // set up events
  const eventKeys = Object.keys(_interface.methods).filter(methodName => {
    return _interface.methods[methodName] === 'HIG.Abstract.EventObject';
  });

  // Narrow props down to just events
  const events = Object.keys(reactProps)
    .filter(prop => eventKeys.indexOf(prop) !== -1)
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  return { defaults, events };
}
