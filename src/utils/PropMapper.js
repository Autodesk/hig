export default class PropMapper {
  constructor(props, instance) {
    this.props = this.toPropsArray(props);
    this.instance = instance;
    this.hig = instance.hig;
    this.accessedProps = new Set();

    ['validate'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });

    setTimeout(this.validate, 0);
  }

  mapToHIGFunctions(mapping) {
    Object.keys(mapping).forEach(propKey => {
      this.accessedProps.add(propKey);

      const higKey = mapping[propKey];
      this.handle(propKey, value => this.hig[higKey](value));
    });
    return this;
  }

  mapToHIGEventListeners(props) {
    props.forEach(propKey => {
      this.accessedProps.add(propKey);

      this.instance.configureHIGEventListener(propKey, props[propKey]);
    });
    return this;
  }

  handle(prop, callback) {
    this.accessedProps.add(prop);

    const propIndex = this.props.indexOf(prop);
    if (propIndex >= 0) {
      const value = this.props.splice(propIndex, 2)[1];
      callback(value);
    }
    return this;
  }

  then(callback) {
    callback(this.props);
    return this;
  }

  validate() {
    const propKeys = this.props.filter((val, i) => {
      return i % 2 === 0; // index is an even number
    });
    let difference = new Array(
      ...propKeys.filter(prop => !this.accessedProps.has(prop))
    );
    difference = difference.filter(prop => {
      return prop !== 'children';
    });

    if (difference.length > 0) {
      console.warn(
        `Orion ${this.hig.constructor.name} does not handle "${difference.join('", "')}"`
      );
    }
  }

  toPropsArray(props) {
    if (Array.isArray(props)) {
      return props;
    }

    return Object.keys(props).reduce(
      (acc, propKey) => {
        return acc.concat([propKey, props[propKey]]);
      },
      []
    );
  }
}
