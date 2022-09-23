var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageCount = 0;
  var frontIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (!storageCount) {
      frontIndex = 0;
      storage[frontIndex] = value;
    } else {
      storage[frontIndex + storageCount] = value;
    }

    storageCount++;
    return storage;
  };

  someInstance.dequeue = function() {
    var temp;

    if (storageCount) {
      temp = storage[frontIndex];
      delete storage[frontIndex];
      frontIndex++;
      storageCount--;
      return temp;
    }
  };

  someInstance.size = function() {
    return storageCount;
  };

  return someInstance;
};
