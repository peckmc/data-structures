var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(_.every(this._storage, function(element) {
    return element !== item;
  })) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var itemIndex = this._storage.indexOf(item);
  this._storage.splice(itemIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n)
 */
