const BinaryNode = require("../src/Node/BinaryNode");
const { Tree } = require("../src/Tree/Tree");
const dataSet = require("../src/assets/dataSet");
const { BinaryTree } = require("../src/Tree/BinaryTree");

const mockDataSet = {
  value: {
    name: "James Smith",
    salary: 15,
  },
  leftChild: {
    value: {
      name: "John Johnson",
      salary: 10,
    },
    leftChild: {
      value: {
        name: "Mary Williams",
        salary: 7,
      },
    },
  },
  rightChild: {
    value: {
      name: "Richard Davis",
      salary: 13,
    },
  },
};

test("BinaryTree obj should be an extension of the Tree", () => {
  const BST = new BinaryTree();
  expect(BST instanceof BinaryTree).toBe(true);
});

test("BinaryTree should have an insert method", () => {
  const BST = new BinaryTree();
  expect(BST.__proto__.hasOwnProperty("insert")).toEqual(true);
});

test("the extended BinaryNode should be an object and should have property with given data value", () => {
  const testNode = new BinaryNode("");
  expect(testNode instanceof Object).toBe(true);
  expect(testNode.data).toBe("");
});

test("BinaryTree obj should be an extension of the Tree", () => {
  const BST = new BinaryTree();
  expect(BST instanceof Tree).toBe(true);
});

test("BinaryTree obj should be an extension of the Tree", () => {
  const BST = new BinaryTree();
  expect(BST instanceof Tree).toBe(true);
});

test("BinaryTree should have an insert method", () => {
  const BinarySTree = new BinaryTree();
  BinarySTree.insert(mockDataSet);
  const expected = {
    name: "James Smith",
    salary: 15,
  };
  expect(BinarySTree.getTree().data).toEqual(expected);
});

test("BinaryTree obj should have a postOrder method and check items", () => {
  const BST = new BinaryTree();
  BST.insert(mockDataSet);
  const postOrderedResult = BST.postOrder();

  const expected1 = {
    name: "Mary Williams",
    salary: 7,
  };
  const expected2 = {
    name: "James Smith",
    salary: 15,
  };
  expect(postOrderedResult[0]).toEqual(expected1);
  expect(postOrderedResult[3]).toEqual(expected2);
});

test("BinaryTree obj should have a preOrder method and check items", () => {
  const BST = new BinaryTree();
  BST.insert(mockDataSet);
  const preOrderedResult = BST.preOrder();

  const expected1 = {
    name: "James Smith",
    salary: 15,
  };
  const expected2 = {
    name: "Richard Davis",
    salary: 13,
  };

  expect(preOrderedResult[0]).toEqual(expected1);
  expect(preOrderedResult[3]).toEqual(expected2);
});

test("BinaryTree obj should have an inOrder method and check items", () => {
  const BST = new BinaryTree();
  BST.insert(mockDataSet);
  const inOrderedResult = BST.inOrder();

  const expected1 = {
    name: "Mary Williams",
    salary: 7,
  };
  const expected2 = {
    name: "Richard Davis",
    salary: 13,
  };
  expect(inOrderedResult[0]).toEqual(expected1);
  expect(inOrderedResult[3]).toEqual(expected2);
});

test("BinaryTree should have a findNodes method", () => {
  const BST = new BinaryTree();
  BST.insert(mockDataSet);
  let expected = JSON.stringify(BST.findNodes("name", "Mary Williams")[0]);
  expect(`{"name":"Mary Williams","salary":7}`).toEqual(expected);

  expect(BST.findNodes("name", "Mary").length).toEqual(0);
});
