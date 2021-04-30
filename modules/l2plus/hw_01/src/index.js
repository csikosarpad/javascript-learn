import { dataSet } from "./assets/dataSet.js";

import { BinaryTree, BinarySearchTree } from "./TreeMap.js";

console.log("BinaryTree: ", BinaryTree);

const BT = new BinaryTree("test");
BT.fillTree(dataSet);
console.log(BT.getTree());
console.log(BT.valuesToArray());

const BST = new BinarySearchTree();
BST.fillTree(dataSet);
// error message
console.log(BST.binarySearch("name"));
// valid search
console.log(BST.binarySearch("name", "Michael Miller"));
// not exists
console.log(BST.binarySearch("name", "Raffael Gonzales"));
console.log(BST.binarySearch("salary", 17));

/*module.exports = {
    BinarySearchTree,
    BinaryTree,
    Node
};*/
