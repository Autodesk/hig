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
 * Makes it simple to manage a list of child nodes within a react-hig element
 */
export default class HIGNodeList {
  constructor({ type, HIGConstructor, onAdd }) {
    if (!type) {
      throw new Error('type is required');
    }

    if (!HIGConstructor) {
      throw new Error('HIGConstructor is required');
    }

    if (!onAdd) {
      throw new Error('onInsert is required');
    }

    /**
     * This is the constructor function for the HIGElement
     */
    this.type = type;

    /**
     * This is the constructor function for the hig.web partial
     */
    this.HIGConstructor = HIGConstructor;

    /**
     * This is a function which calls the hig add* method. It takes two hig instances
     */
    this.onAdd = onAdd;

    this.nodes = [];
    this.mounted = false;
  }

  insertBefore(instance, insertBeforeIndex) {
    if (!(instance instanceof this.type)) {
      throw new Error(`unknown type ${instance}`);
    }

    // Update the model
    const beforeChild = this._item(insertBeforeIndex);

    if (beforeChild) {
      this._insertBefore(instance, beforeChild);
    } else {
      this._appendChild(instance);
    }

    if (this.mounted) {
      if (beforeChild) {
        this.onAdd(instance.hig, beforeChild.hig);
        instance.mount();
      } else {
        this.onAdd(instance.hig);
        instance.mount();
      }
    }
  }
  _appendChild(node) {
    this.nodes.push(node);
  }
  
  _insertBefore(node, beforeNode) {
    const index = this.nodes.indexOf(beforeNode);
    this.nodes.splice(index, 0, node);
  }

  removeChild(node) {
    const index = this.nodes.indexOf(node);
    this.nodes.splice(index, 1);
    node.unmount();
  }

  _item(index) {
    return this.nodes[index];
  }

  componentDidMount() {
    this.nodes.forEach(node => {
      this.onAdd(node.hig);
      node.mount();
    });

    this.mounted = true;
  }

  createElement(ElementConstructor, props) {
    switch (ElementConstructor) {
      case this.type:
        return new this.type(this.HIGConstructor, props);
      default:
        throw new Error(`Unknown type ${ElementConstructor.name}`);
    }
  }

  forEach(handler) {
    this.nodes.forEach(handler);
  }

  map(handler) {
    return this.nodes.map(handler);
  }

  get length(){
    return this.nodes.length
  }
}
