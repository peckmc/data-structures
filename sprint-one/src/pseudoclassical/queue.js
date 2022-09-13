var Queue = function() {
  this.storage = {};
  this.storageCount = 0;
  this.frontIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  if (!this.storageCount) {
    this.frontIndex = 0;
    this.storage[this.frontIndex] = value;
  } else {
    this.storage[this.frontIndex + this.storageCount] = value;
  }

  this.storageCount++;
  return this.storage;
};

Queue.prototype.dequeue = function() {
  var temp;

  if (this.storageCount) {
    temp = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    this.storageCount--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.storageCount;
};

var myQueue = new Queue();