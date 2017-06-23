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
import partitionProps from '../interface/partitionProps';
import PropMapper from '../utils/PropMapper';

/**
 * The base class for all React-Hig Elements. These elements hook into the
 * adapters/createComponent adapter, store low level state like event listeners
 * and call the appropriate methods on hig.web instance when needed
 *
 */
export default class HIGElement {
  constructor(HIGConstructor, initialProps) {
    this.initialProps = initialProps;

    const { defaults, events, possibleEvents } = partitionProps(
      initialProps,
      HIGConstructor._interface
    );

    // Store the events until we mount
    this.events = events;
    this.possibleEvents = possibleEvents;

    // Where we store event handler dispose functions
    this._disposeFunctions = new Map();

    // Create the hig instance with the defaults as per the interface
    this.hig = new HIGConstructor(defaults);

    this.mounted = false;
  }

  mount(mountNode, beforeChild) {
    if (mountNode) {
      this.hig.mount(mountNode, beforeChild);
    }

    this.mounted = true;

    Object.keys(this.events).forEach(eventName => {
      this.setupEvent(eventName, this.events[eventName]);
    });

    this.componentDidMount();
  }

  componentDidMount() {
    // sub-classes should override this class
  }

  componentDidUnmount() {
    // sub-classes should override this class
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();
    this.componentDidUnmount();
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    /* no-op */
    // sub-classes should implement if they need to
  }

  // Abstracts a common way of updating property changes.
  // Children will be seen and not heard, i.e. ignored
  commitUpdateWithMapping(updatePayload, mapping) {
    console.warn(`${this.constructor.name}.commitUpdateWithMapping is deprecated. Call configureHIGEventListener instead.`)
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      if (propKey === 'children') {
        break;
      }

      if (mapping[propKey]) {
        this.hig[mapping[propKey]](propValue);
      } else {
        this.commitPropChange(propKey, propValue);
      }
    }
  }

  commitPropChange(propKey, propValue) {
    console.warn(`${this.constructor.name}.commitPropChange is deprecated. Call configureHIGEventListener instead.`);
    this.configureHIGEventListener(propKey, propValue);
  }

  configureHIGEventListener(propKey, propValue) {
    if (this.events[propKey]) {
      this.replaceHIGEventListener(propKey, propValue);
    } else if (this.possibleEvents.indexOf(propKey) !== -1) {
      this.addHIGEventListener(propKey, propValue);
    } else {
      console.warn(`${this.hig.constructor.name} has no event listener "${propKey}"`);
    }
  }

  setupEvent(eventName, eventFn) {
    console.warn(`${this.constructor.name}.setupEvent is deprecated. Call addHIGEventListener instead.`);
    this.addHIGEventListener(eventName, eventFn);
  }

  addHIGEventListener(eventName, eventFn) {
    if (!eventFn) {
      return;
    }

    // in this case we are setting up a new event
    const dispose = this.hig[eventName](eventFn);
    this._disposeFunctions.set(eventName, dispose);
    this.events[eventName] = eventFn;
  }

  replaceEvent(eventName, eventFn) {
    console.warn(`${this.constructor.name}.replaceEvent is deprecated. Call replaceHIGEventListener instead.`);
    this.replaceHIGEventListener(eventName, eventFn);
  }

  replaceHIGEventListener(eventName, eventFn) {
    // Find the old dispose function
    const dispose = this._disposeFunctions.get(eventName);

    // If found, dispose of it
    if (dispose) {
      dispose();
    }

    if (eventFn) {
      // Replace in the local events map
      this.events[eventName] = eventFn;
      this._disposeFunctions.set(eventName, this.hig[eventName](eventFn));
    } else {
      delete this.events[eventName];
    }
  }

  requireSingleInstance(instance, requiredSinglesList) {
    const name = instance.constructor.name;
    if (requiredSinglesList.includes(name) && this[name.toLowerCase()]) {
      throw new Error('only one ' + name + ' is allowed');
    }
  }

  processUpdateProps(updatePayload) {
    return new PropMapper(updatePayload, this);
  }
}
