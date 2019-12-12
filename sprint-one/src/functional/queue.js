var Queue = function() {
  debugger;
  var someInstance = {};

  var head=0; //going out
  var tail=0; //going in
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  //fifo-first in first out
  //going in
  someInstance.enqueue = function(value) {
    storage[tail]=value;
    tail++;


  };

  someInstance.dequeue = function() {
    if(tail-head>=0){

      value=storage[head];
      delete storage[head];
      head++;
      return value;
    }
  };

  someInstance.size = function() {
    if(head>tail){
      return 0;
    }
    return tail-head;
  };

  return someInstance;
};

