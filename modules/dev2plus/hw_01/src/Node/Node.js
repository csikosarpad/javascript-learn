/**
 * Node of the tree.
 *
 * @public
 * @constructor
 * @param {Number|String} data Value of the node.
 * @param {Node} left Left sibling.
 * @param {Node} right Right sibling.
 * @param {Node} parent Parent of the node.
 */
class Node {
  constructor(data, left = null, right = null, parent = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  getValue() {
    return {
      data: this.data,
    };
  }
}

module.exports = Node;
