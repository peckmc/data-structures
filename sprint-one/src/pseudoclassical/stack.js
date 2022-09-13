var Stack = function() {
  this.storage = {};
  this.storageCount = 0;
};

Stack.prototype.push = function(value) {
  if (!this.storageCount) {
    this.storage['0'] = value;
  } else {
    this.storage[this.storageCount] = value;
  }

  this.storageCount++;
  return this.storage;
};

Stack.prototype.pop = function() {
  var temp;

  if (this.storageCount > 0) {
    this.storageCount--;
    temp = this.storage[this.storageCount];
    delete this.storage[this.storageCount];
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.storageCount;
};

var myStack = new Stack();
