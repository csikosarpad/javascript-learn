const Node = require("../src/Node/Node");

test("the default Node should be an object and should have property with given data value", () => {
  const testNode = new Node("");
  expect(testNode instanceof Object).toBe(true);
  expect(testNode.data).toBe("");
});
