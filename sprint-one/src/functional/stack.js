var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageCount = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (!storageCount) {
      storage['0'] = value;
    } else {
      storage[storageCount] = value;
    }

    storageCount++;
    return storage;
  };

  someInstance.pop = function() {
    var temp;

    if (storageCount > 0) {
      storageCount--;
      temp = storage[storageCount];
      delete storage[storageCount];
      return temp;
    }
  };

  someInstance.size = function() {
    return storageCount;
  };

  return someInstance;
};
