

export default class PropMapper {
  constructor(updatedProps, instance) {
    this.props = this.toPropsArray(updatedProps);
    this.instance = instance;
    this.hig = instance.hig;
    this.instance.props = Object.assign(
      {},
      instance.props,
      this.toPropsObject(this.props)
    );
  }

  mapToHIGFunctions(mapping) {
    Object.keys(mapping).forEach(propKey => {
      const higKey = mapping[propKey];
      this.handle(propKey, value => this.hig[higKey](value));
    });
    return this;
  }

  mapToHIGEventListeners(propKeys) {
    propKeys.forEach(propKey => {
      this.handle(propKey, value => {
        this.instance.configureHIGEventListener(propKey, value);
      });
    });
    return this;
  }

  handle(propKey, handleValue) {
    const propIndex = this.props.indexOf(propKey);
    if (propIndex >= 0) {
      const value = this.props[propIndex + 1];
      handleValue(value);
    }
    return this;
  }

  then(callback) {
    callback(this.props);
    return this;
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

  toPropsObject(propsArray) {
    const propsObject = {};
    for (let i = 0; i < propsArray.length; i += 2) {
      const propKey = propsArray[i];
      const propValue = propsArray[i + 1];

      propsObject[propKey] = propValue;
    }
    return propsObject;
  }
}
