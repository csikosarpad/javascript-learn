"use strict";

var BinaryNode = require("../src/Node/Node");

var _require = require("../src/Tree/Tree"),
    Tree = _require.Tree;

var dataSet = require("../src/assets/dataSet");

var _require2 = require("../src/Tree/BinaryTree"),
    BinaryTree = _require2.BinaryTree;

var mockDataSet = {
  value: {
    name: "James Smith",
    salary: 15
  },
  leftChild: {
    value: {
      name: "John Johnson",
      salary: 10
    },
    leftChild: {
      value: {
        name: "Mary Williams",
        salary: 7
      }
    }
  },
  rightChild: {
    value: {
      name: "Richard Davis",
      salary: 13
    }
  }
};
test("BinaryTree obj should be an extension of the Tree", function () {
  var BST = new BinaryTree();
  expect(BST instanceof BinaryTree).toBe(true);
});
test("BinaryTree should have an insert method", function () {
  var BST = new BinaryTree();
  expect(BST.__proto__.hasOwnProperty("insert")).toEqual(true);
});
test("the extended BinaryNode should be an object and should have property with given data value", function () {
  var testNode = new BinaryNode("");
  expect(testNode instanceof Object).toBe(true);
  expect(testNode.data).toBe("");
});
test("BinaryTree obj should be an extension of the Tree", function () {
  var BST = new BinaryTree();
  expect(BST instanceof Tree).toBe(true);
});
test("BinaryTree should have an insert method", function () {
  var BST = new BinaryTree();
  BST.insert(mockDataSet);
  var expected = {
    name: "James Smith",
    salary: 15
  };
  var result = BST.getTree().data;
  expect(result).toEqual(expected);
});
test("BinaryTree obj should have a postOrder method and check items", function () {
  var BST = new BinaryTree();
  BST.insert(mockDataSet);
  var postOrderedResult = BST.postOrder();
  var expected1 = {
    name: "Mary Williams",
    salary: 7
  };
  var expected2 = {
    name: "James Smith",
    salary: 15
  };
  expect(postOrderedResult[0]).toEqual(expected1);
  expect(postOrderedResult[3]).toEqual(expected2);
});
test("BinaryTree obj should have a preOrder method and check items", function () {
  var BST = new BinaryTree();
  BST.insert(mockDataSet);
  var preOrderedResult = BST.preOrder();
  var expected1 = {
    name: "James Smith",
    salary: 15
  };
  var expected2 = {
    name: "Richard Davis",
    salary: 13
  };
  expect(preOrderedResult[0]).toEqual(expected1);
  expect(preOrderedResult[3]).toEqual(expected2);
});
test("BinaryTree obj should have an inOrder method and check items", function () {
  var BST = new BinaryTree();
  BST.insert(mockDataSet);
  var inOrderedResult = BST.inOrder();
  var expected1 = {
    name: "Mary Williams",
    salary: 7
  };
  var expected2 = {
    name: "Richard Davis",
    salary: 13
  };
  expect(inOrderedResult[0]).toEqual(expected1);
  expect(inOrderedResult[3]).toEqual(expected2);
});
test("BinaryTree should have a findNodes method", function () {
  var BST = new BinaryTree();
  BST.insert(mockDataSet);
  var expected = JSON.stringify(BST.findNodes("name", "Mary Williams")[0]);
  /* eslint-disable-next-line */

  expect("{\"name\":\"Mary Williams\",\"salary\":7}").toEqual(expected);
  expect(BST.findNodes("name", "Mary").length).toEqual(0);
});