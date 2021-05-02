const dataSet = require("./assets/dataSet");
const { BinaryTree, sortBySalary, sortByName } = require("./Tree/BinaryTree");
const utils = require("./utils/utils");

const BinarySTree = new BinaryTree();

BinarySTree.insert(dataSet);

//console.log(BinarySTree.getTree());
utils.timeMeasure("start", "inOrder");
console.log(BinarySTree.inOrder());
utils.timeMeasure("stop", "inOrder");
console.log(utils.stateTime.result);

utils.timeMeasure("start", "preOrder");
console.log(BinarySTree.preOrder());
utils.timeMeasure("stop", "preOrder");
console.log(utils.stateTime.result);

utils.timeMeasure("start", "postOrder");
console.log(BinarySTree.postOrder());
utils.timeMeasure("stop", "postOrder");
console.log(utils.stateTime.result);

utils.timeMeasure("start", "findNodes");
console.log(BinarySTree.findNodes("name", "Patricia Brown"));
utils.timeMeasure("stop", "findNodes [inOrder]");
console.log(utils.stateTime.result);

utils.timeMeasure("start", "findNodes");
console.log(BinarySTree.findNodes("salary", 17));
utils.timeMeasure("stop", "findNodes [inOrder]");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.inOrder().sort(sortBySalary));
utils.timeMeasure("stop", "inOrder sort by salary");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.inOrder().sort(sortByName));
utils.timeMeasure("stop", "inOrder sort by name");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.preOrder().sort(sortBySalary));
utils.timeMeasure("stop", "preOrder sort by salary");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.preOrder().sort(sortByName));
utils.timeMeasure("stop", "preOrder sort by name");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.postOrder().sort(sortBySalary));
utils.timeMeasure("stop", "postOrder sort by salary");
console.log(utils.stateTime.result);

utils.timeMeasure("start");
console.log(BinarySTree.postOrder().sort(sortByName));
utils.timeMeasure("stop", "postOrder sort by name");
console.log(utils.stateTime.result);

/**

    kulcs kezelés (több, ugyanolyan key)
    sort - fa rendezés

    fill ne a Tree-ben legyen
    binarySearchTree

 */
