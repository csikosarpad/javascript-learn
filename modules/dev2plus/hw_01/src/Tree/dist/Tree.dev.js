"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node = require("../Node/Node");

var Tree =
/*#__PURE__*/
function () {
  function Tree() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, Tree);

    this.name = name;
    this.root = null;
  }

  _createClass(Tree, [{
    key: "getTree",
    value: function getTree() {
      return this.root;
    }
  }]);

  return Tree;
}();

module.exports = {
  Tree: Tree
};