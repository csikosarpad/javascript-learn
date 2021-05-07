const Node = require("../Node/Node");
const { Tree } = require("./Tree");

/**
 * Binary tree.
 *
 * @public
 * @constructor
 */
class BinaryTree extends Tree {
  constructor(key) {
    super();
    this._key = key;
  }

  insert(data) {
    this.root = new Node(data.value);
    this._insertNode(this.root, data);
  }

  _insertNode(node, data) {
    if (data.leftChild) {
      if (!node.left) {
        node.left = new Node(data.leftChild.value);
        this._insertNode(node.left, data.leftChild);
      } else {
        this._insertNode(node.left, data.leftChild);
      }
    }
    if (data.rightChild) {
      if (!node.right) {
        node.right = new Node(data.rightChild.value);
        this._insertNode(node.right, data.rightChild);
      } else {
        this._insertNode(node.right, data.rightChild);
      }
    }
  }

  inOrder() {
    const result = [];
    const node = this.root;
    const traverse = (node) => {
      node.left && traverse(node.left);
      result.push(node.data);
      node.right && traverse(node.right);
    };
    traverse(node);
    return result;
  }

  postOrder() {
    const result = [];
    const node = this.root;
    const traverse = function (node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.data);
    };
    traverse(node);
    return result;
  }

  preOrder() {
    const result = [];
    const node = this.root;
    const traverse = function (node) {
      result.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };
    traverse(node);
    return result;
  }

  findNodes(key, value) {
    return this.inOrder().filter((node) => node[key] === value);
  }
}

const sortBySalary = (a, b) => {
  return a.salary - b.salary;
};

const sortByName = (a, b) => {
  return a.name.localeCompare(b.name);
};

/**
 * Helpers
 *
 */

module.exports = {
  BinaryTree,
  sortBySalary,
  sortByName,
};
