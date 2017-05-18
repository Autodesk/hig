/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/**
 * Takes reactProps and an interface and returns props
 * @param {React.Properties} reactProps
 * @param {HIG.Web.Interface} _interface
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
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  // set up events
  const possibleEvents = Object.keys(_interface.methods).filter(methodName => {
    return _interface.methods[methodName] === 'HIG.abstract.EventObject';
  });

  // Narrow props down to just events
  const events = Object.keys(reactProps)
    .filter(prop => possibleEvents.indexOf(prop) !== -1)
    .reduce(
      (acc, memo) => {
        acc[memo] = reactProps[memo];
        return acc;
      },
      {}
    );

  return { defaults, events, possibleEvents };
}
