

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (element in this.nodes) {
    for (var i = 0; i < this.nodes[element].length; i++) {
      if (this.nodes[element][i] === node) {
        this.nodes[element].splice(i, 1);
      }
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.nodes[fromNode].length; i++) {
    var currentNode = this.nodes[fromNode][i];
    if (currentNode === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIndex = this.nodes[fromNode].indexOf(toNode);
  var fromIndex = this.nodes[toNode].indexOf(fromNode);

  this.nodes[fromNode].splice(toIndex, 1);
  this.nodes[toNode].splice(fromIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(n^2)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(n)
 * forEachNode: O(n)
 */


