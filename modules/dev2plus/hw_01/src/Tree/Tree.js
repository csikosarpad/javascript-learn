const Node = require("../Node/Node");

class Tree {
  constructor(name = "") {
    this.name = name;
    this.root = null;
  }

  getTree() {
    return this.root;
  }
}

module.exports = {
  Tree,
};
