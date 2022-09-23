var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.storageCount = 0;
  newQueue.frontIndex = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (!this.storageCount) {
    this.frontIndex = 0;
    this.storage[this.frontIndex] = value;
  } else {
    this.storage[this.frontIndex + this.storageCount] = value;
  }

  this.storageCount++;
  return this.storage;
};

queueMethods.dequeue = function() {
  var temp;

  if (this.storageCount) {
    temp = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    this.storageCount--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.storageCount;
};

