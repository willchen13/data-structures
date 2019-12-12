var Stack = function() {
  var someInstance = {};

  var size=0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size]=value;
    size++;
  };

  someInstance.pop = function() {
    if(size>0){
      size--; //pops last element of array
      var value= storage[size]; //last element of array
      delete storage[size];
      return value;
    }

  };

  someInstance.size = function() {
    if(size<0){
      return 0;
    }
    return size;
  };

  return someInstance;
};
