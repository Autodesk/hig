import partitionProps from '../interface/partitionProps';

/**
 * The base class for all React-Hig Elements. These elements hook into the
 * adapters/createComponent adapter, store low level state like event listeners
 * and call the appropriate methods on hig-vanilla instance when needed
 *
 */
export default class HIGElement {
  constructor(HIGConstructor, initialProps) {
    this.initialProps = initialProps;
    this.props = initialProps;

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
      this.addHIGEventListener(eventName, this.events[eventName]);
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

  addHIGEventListener(eventName, eventFn) {
    if (!eventFn) {
      return;
    }

    // in this case we are setting up a new event
    const dispose = this.hig[eventName](eventFn);
    this._disposeFunctions.set(eventName + 'Dispose', dispose);
    this.events[eventName] = eventFn;
  }

  requireSingleInstance(instance, requiredSinglesList) {
    const name = instance.constructor.name;
    if (requiredSinglesList.includes(name) && this[name.toLowerCase()]) {
      throw new Error('only one ' + name + ' is allowed');
    }
  }
}
