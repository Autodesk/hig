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

export default class PropMapper {
  constructor(updatedProps, instance) {
    this.props = this.toPropsArray(updatedProps);
    this.instance = instance;
    this.hig = instance.hig;
    this.accessedProps = new Set();
    this.instance.props = Object.assign({}, instance.props, this.toPropsObject(updatedProps));

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

  mapToHIGEventListeners(propKeys) {
    propKeys.forEach(propKey => {
      this.handle(propKey, value => {
        this.instance.configureHIGEventListener(propKey, value);
      });
    });
    return this;
  }

  handle(propKey, handleValue) {
    this.accessedProps.add(propKey);

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
