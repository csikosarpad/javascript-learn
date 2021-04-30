import { Node } from "./Node.js";

const stateTime = {
  state: null,
  startTime: null,
  stopTime: null,
  result: null,
  measuringType: null,
};

const timeMeasure = (state, ...measuringType) => {
  stateTime.state = state;
  stateTime.measuringType = measuringType || "not defined";

  switch (state) {
    case "start":
      stateTime.startTime = new Date().getTime();
      break;
    case "stop":
      stateTime.stopTime = new Date().getTime();
      stateTime.result = `The measuring (${
        stateTime.measuringType
      }) time result is: ${stateTime.stopTime - stateTime.startTime}ms`;
      break;
  }
};

class TreeMap {
  constructor(name = "") {
    this.name = name;
    this.root = null;
  }

  insert(node, data) {
    if (data.leftChild) {
      if (!node.leftChild) {
        node.leftChild = new Node(data.leftChild.value);
        this.insert(node.leftChild, data.leftChild);
      } else {
        this.insert(node.leftChild, data.leftChild);
      }
    }
    if (data.rightChild) {
      if (!node.rightChild) {
        node.rightChild = new Node(data.rightChild.value);
        this.insert(node.rightChild, data.rightChild);
      } else {
        this.insert(node.rightChild, data.rightChild);
      }
    }
  }

  fillTree(data) {
    this.root = new Node(data.value);
    this.insert(this.root, data);
  }

  getTree() {
    return this.root;
  }

  valuesToArray() {
    let array = [];
    const traverse = function (node) {
      if (node && node.leftChild) {
        traverse(node.leftChild);
      }
      array.push(node.value);
      if (node && node.rightChild) {
        traverse(node.rightChild);
      }
    };
    traverse(this.root);
    return array;
  }
}

class BinaryTree extends TreeMap {}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  binarySearch(key, value) {
    timeMeasure("start");
    if (value === "" || value === undefined) {
      return "Please give me valid search value.";
    }

    const sortBySalary = (a, b) => {
      return a.salary - b.salary;
    };

    const sortByName = (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    let flattedItems = this.valuesToArray();

    const sortFunction = key === "name" ? sortByName : sortBySalary;
    const sortedArray = flattedItems.sort(sortFunction);
    const findElement = function (array, start, end, value) {
      if (end >= start) {
        const middle = Math.floor(end - start / 2);
        if (array[middle][key] == value) {
          return `The searched element where ${key} = ${value} is on the base of the arrangment: '${sortFunction.name}' on the index: ${middle}.`;
        }
        if (array[middle][key] > value) {
          return findElement(array, start, middle - 1, value);
        } else {
          return findElement(array, middle + 1, end, value);
        }
      }
      return `The searched element where ${key} = ${value} not exists.`;
    };

    timeMeasure("stop", "binarySearch");
    console.log(stateTime.result);
    return findElement(sortedArray, 0, sortedArray.length - 1, value);

    /*const findElement = (key) => {
      let sResult = null;
      switch (key) {
        case "name":
          sResult = sortByName().find((element) => element.name === value);
          break;
        case "salary":
          sResult = sortBySalary().find((element) => element.salary === value);
          break;
      }
      return sResult;
    };
    return findElement();*/
    /*const findElement = function (array, start, end, value) {
      if (end >= start) {
        const middle = Math.floor(end - start / 2);
        if (array[middle][key] == value) {
          return `The searched element where ${key} = ${value} is on the index: ${middle}.`;
        }
        if (array[middle][key] > value) {
          return findElement(array, start, middle - 1, value);
        } else {
          return findElement(array, middle + 1, end, value);
        }
      }
      return `The searched element where ${key} = ${value} not exists.`;
    };
    timeMeasure("stop", "binarySearch");
    console.log(stateTime.result);

    //return findElement(sortedByName, 0, sortedByName.length - 1, value);
    return findElement(sortedBySalary, 0, sortedBySalary.length - 1, value);*/
  }
}

export { BinaryTree, BinarySearchTree };
