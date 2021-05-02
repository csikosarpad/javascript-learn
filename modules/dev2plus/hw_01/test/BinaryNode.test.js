const BinaryNode = require("../src/Node/BinaryNode");
const { Tree } = require("../src/Tree/Tree");
const dataSet = require("../src/assets/dataSet");

test("the extended BinaryNode should be an object and should have property with given data value", () => {
  const testNode = new BinaryNode("");
  expect(testNode instanceof Object).toBe(true);
  expect(testNode.data).toBe("");
});
