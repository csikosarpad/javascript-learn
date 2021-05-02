const dataSet = require("./assets/dataSet");
const { BinaryTree, sortBySalary, sortByName } = require("./Tree/BinaryTree");

const BinarySTree = new BinaryTree();

BinarySTree.insert(dataSet);

console.log("default");
console.log(BinarySTree.getTree());

console.log("inOrder");
console.log(BinarySTree.inOrder());

console.log("preOrder");
console.log(BinarySTree.preOrder());

console.log("postOrder");
console.log(BinarySTree.postOrder());

console.log(BinarySTree.findNodes("name", "Patricia Brown"));
console.log(BinarySTree.findNodes("salary", 17));
console.log("sortBySalary: ", BinarySTree.inOrder().sort(sortBySalary));
console.log("sortBySalary: ", BinarySTree.inOrder().sort(sortByName));

/**

    kulcs kezelés (több, ugyanolyan key)
    sort - fa rendezés

    fill ne a Tree-ben legyen
    binarySearchTree

 */
