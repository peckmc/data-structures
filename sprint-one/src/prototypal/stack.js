var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.storageCount = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (!this.storageCount) {
    this.storage['0'] = value;
  } else {
    this.storage[this.storageCount] = value;
  }

  this.storageCount++;
  return this.storage;
};

stackMethods.pop = function() {
  var temp;

  if (this.storageCount > 0) {
    this.storageCount--;
    temp = this.storage[this.storageCount];
    delete this.storage[this.storageCount];
    return temp;
  }
};

stackMethods.size = function() {
  return this.storageCount;
};


