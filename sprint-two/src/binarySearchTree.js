var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTreeMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
    var newTree = BinarySearchTree(value);
    this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
    var newTree = BinarySearchTree(value);
    this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTreeMethods.contains = function(value) {
  var result;

  if (this.value === value) {
    return true;
  } else if (this.left && this.left.contains(value)) {
    return true;
  } else if (this.right && this.right.contains(value)) {
    return true;
  }
  return false;

};

BinarySearchTreeMethods.depthFirstLog = function(callback) {

  var helperFunc = function(node) {
    callback(node.value);
    if (node.left) {
      helperFunc(node.left);
    }
    if (node.right) {
      helperFunc(node.right);
    }
  };
  helperFunc(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 */
