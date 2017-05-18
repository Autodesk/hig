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

    if (this.componentDidMount) {
      this.componentDidMount();
    }
  }

  unmount() {
    // Dispose of any functions registered here
    Array.from(this._disposeFunctions).forEach(([_, dispose]) => dispose());
    this._disposeFunctions.clear();
    this.hig.unmount();

    if (this.componentDidUnmount) {
      this.componentDidUnmount();
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    /* no-op */
    // sub-classes should implement if they need to
  }

  commitPropChange(propKey, propValue) {
    if (this.events[propKey]) {
      this.replaceEvent(propKey, propValue);
    } else if (this.possibleEvents.indexOf(propKey) !== -1) {
      this.setupEvent(propKey, propValue);
    } else {
      console.warn(`${propKey} is unknown`);
    }
  }

  setupEvent(eventName, eventFn) {
    // in this case we are setting up a new event
    const dispose = this.hig[eventName](eventFn);
    this._disposeFunctions.set(eventName, dispose);
    this.events[eventName] = eventFn;
  }

  replaceEvent(eventName, eventFn) {
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
}
