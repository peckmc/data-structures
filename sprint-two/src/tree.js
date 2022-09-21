var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  // newTree.addChild = treeMethods.addChild;
  // newTree.contains = treeMethods.contains;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  console.log(newNode);
  this.children.push(newNode);
  console.log("this.children" + JSON.stringify(this.children[1]));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for(var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};

// var tree = Tree(5);
// tree.addChild(5);
// tree.addChild(6);
// console.log(tree.contains(6));
/*
 * Complexity: What is the time complexity of the above functions?
 */
