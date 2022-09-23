class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageCount = 0;
  }

  push(value) {
    if (!this.storageCount) {
      this.storage['0'] = value;
    } else {
      this.storage[this.storageCount] = value;
    }

    this.storageCount++;
    return this.storage;
  }

  pop() {
    var temp;

    if (this.storageCount > 0) {
      this.storageCount--;
      temp = this.storage[this.storageCount];
      delete this.storage[this.storageCount];
      return temp;
    }
  }

  size() {
    return this.storageCount;
  }
}

var myStack = new Stack();