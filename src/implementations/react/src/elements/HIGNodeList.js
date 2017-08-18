

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

    this.listItems = listItems

    this.types = listItems.map( item =>)

    /**
     * This is the constructor function for the hig-vanilla partial
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

  get length() {
    return this.nodes.length;
  }

  forEach(handler) {
    this.nodes.forEach(handler);
  }

  map(handler) {
    return this.nodes.map(handler);
  }

  find(callback) {
    return this.nodes.find(callback);
  }
}
