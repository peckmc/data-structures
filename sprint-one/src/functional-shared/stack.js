var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.storageCount = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

stackMethods = {};

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

