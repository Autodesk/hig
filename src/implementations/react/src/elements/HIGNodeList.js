/**
 * Makes it simple to manage a list of child nodes within a hig-react element
 */
export default class HIGNodeList {
  constructor(listItems) {
    this._checkItems(listItems);

    // This is the constructor function for the hig-vanilla partial
    //this.listItems[constructorName].HIGConstructor;

    //This is the constructor function for the HIGElement
    //this.listItems[constructorName].type;

    //This is a function which calls the hig add* method. It takes two hig instances
    //this.listItems[constructorName].onAdd;

    this.listItems = new Map(Object.values(listItems).map((spec) => {
      return [ spec.type, spec ];
    }));

    this.types = this._retrieveTypes(this.listItems);

    this.nodes = [];
    this.mounted = false;
  }

  insertBefore(instance, insertBeforeIndex) {
    if (!(this.types.indexOf(instance) === -1)) {
      throw new Error(`unknown type ${instance}`);
    }

    var onAdd = this.listItems.get(instance.constructor).onAdd;

    // Update the model
    const beforeChild = this._item(insertBeforeIndex);

    if (beforeChild) {
      this._insertBefore(instance, beforeChild);
    } else {
      this._appendChild(instance);
    }

    if (this.mounted) {
      if (beforeChild) {
        onAdd(instance.hig, beforeChild.hig);
        instance.mount();
      } else {
        onAdd(instance.hig);
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

  _checkItems(listItems) {
    Object.keys(listItems).forEach(item => {
      if (!listItems[item].type) {
        throw new Error("type is required");
      }

      if (!listItems[item].HIGConstructor) {
        throw new Error("HIGConstructor is required");
      }

      if (!listItems[item].onAdd) {
        throw new Error("onInsert is required");
      }
    });
  }

  _retrieveTypes(listItems) {
    var listTypes = [];
    Object.keys(listItems).forEach(item => {
      listTypes.push(listItems[item].type);
    });
    return listTypes;
  }

  componentDidMount() {
    this.nodes.forEach(node => {
      const onAdd = this.listItems.get(node.constructor).onAdd;
      onAdd(node.hig);
      node.mount();
    });

    this.mounted = true;
  }

  createElement(ElementConstructor, props) {
    var type = this.listItems.get(ElementConstructor).type;
    var constructor = this.listItems.get(ElementConstructor).HIGConstructor;

    if (type) {
      return new type(constructor, props);
    } else {
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
