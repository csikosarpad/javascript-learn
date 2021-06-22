"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Node = require("../Node/Node");

var _require = require("./Tree"),
    Tree = _require.Tree;
/**
 * Binary tree.
 *
 * @public
 * @constructor
 */


var BinaryTree =
/*#__PURE__*/
function (_Tree) {
  _inherits(BinaryTree, _Tree);

  function BinaryTree(key) {
    var _this;

    _classCallCheck(this, BinaryTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BinaryTree).call(this));
    _this._key = key;
    return _this;
  }

  _createClass(BinaryTree, [{
    key: "insert",
    value: function insert(data) {
      this.root = new Node(data.value);

      this._insertNode(this.root, data);
    }
  }, {
    key: "_insertNode",
    value: function _insertNode(node, data) {
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
  }, {
    key: "inOrder",
    value: function inOrder() {
      var result = [];
      var node = this.root;

      var traverse = function traverse(node) {
        node.left && traverse(node.left);
        result.push(node.data);
        node.right && traverse(node.right);
      };

      traverse(node);
      return result;
    }
  }, {
    key: "postOrder",
    value: function postOrder() {
      var result = [];
      var node = this.root;

      var traverse = function traverse(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.data);
      };

      traverse(node);
      return result;
    }
  }, {
    key: "preOrder",
    value: function preOrder() {
      var result = [];
      var node = this.root;

      var traverse = function traverse(node) {
        result.push(node.data);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
      };

      traverse(node);
      return result;
    }
  }, {
    key: "findNodes",
    value: function findNodes(key, value) {
      return this.inOrder().filter(function (node) {
        return node[key] === value;
      });
    }
  }]);

  return BinaryTree;
}(Tree);

var sortBySalary = function sortBySalary(a, b) {
  return a.salary - b.salary;
};

var sortByName = function sortByName(a, b) {
  return a.name.localeCompare(b.name);
};
/**
 * Helpers
 *
 */


module.exports = {
  BinaryTree: BinaryTree,
  sortBySalary: sortBySalary,
  sortByName: sortByName
};