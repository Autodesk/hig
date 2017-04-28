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
