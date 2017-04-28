export default class HIGNodeList {
  constructor() {
    this.nodes = [];
  }

  appendChild(node) {
    this.nodes.push(node);
  }

  insertBefore(node, beforeNode) {
    const index = this.nodes.indexOf(beforeNode);
    this.nodes.splice(index, 0, node);
  }

  removeChild(node) {
    const index = this.nodes.indexOf(node);
    this.nodes.splice(index, 1);
  }

  item(index) {
    return this.nodes[index];
  }

  [Symbol.iterator]() {
    var nextIndex = 0;

    return {
      next: () => {
        return nextIndex < this.nodes.length
          ? { value: this.nodes[nextIndex++], done: false }
          : { done: true };
      }
    };
  }
}
