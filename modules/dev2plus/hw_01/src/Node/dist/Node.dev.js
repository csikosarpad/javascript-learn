"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Node =
/*#__PURE__*/
function () {
  function Node(data) {
    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var parent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Node);

    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  _createClass(Node, [{
    key: "getValue",
    value: function getValue() {
      return {
        data: this.data
      };
    }
  }]);

  return Node;
}();

module.exports = Node;