const Node = require("../Node/Node");

class Tree {
  constructor(name = "") {
    this._name = name;
    this._root = null;
  }

  getTree() {
    return this._root;
  }
}

module.exports = {
  Tree,
};
