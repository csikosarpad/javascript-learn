"use strict";

var BinaryNode = require("../src/Node/BinaryNode");

var _require = require("../src/Tree/Tree"),
    Tree = _require.Tree;

var dataSet = require("../src/assets/dataSet");

test("the extended BinaryNode should be an object and should have property with given data value", function () {
  var testNode = new BinaryNode("");
  expect(testNode instanceof Object).toBe(true);
  expect(testNode.data).toBe("");
});