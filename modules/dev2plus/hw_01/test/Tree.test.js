const Node = require("../src/Node/Node");
const { Tree } = require("../src/Tree/Tree");

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

test("Tree obj should be an extension of the Tree", () => {
  const ST = new Tree();
  expect(ST instanceof Tree).toBe(true);
});

test("Tree should not have an insert method", () => {
  const STree = new Tree();
  expect(STree.__proto__.hasOwnProperty("insert")).toEqual(false);
});
