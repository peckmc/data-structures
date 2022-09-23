class Queue {
  constructor() {
    this.storage = {};
    this.storageCount = 0;
    this.frontIndex = 0;
  }

  enqueue(value) {
    if (!this.storageCount) {
      this.frontIndex = 0;
      this.storage[this.frontIndex] = value;
    } else {
      this.storage[this.frontIndex + this.storageCount] = value;
    }

    this.storageCount++;
    return this.storage;
  }

  dequeue() {
    var temp;

    if (this.storageCount) {
      temp = this.storage[this.frontIndex];
      delete this.storage[this.frontIndex];
      this.frontIndex++;
      this.storageCount--;
      return temp;
    }
  }

  size() {
    return this.storageCount;
  }
}

var myQueue = new Queue();
