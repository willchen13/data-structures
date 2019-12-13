var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check is list is empty => list.head=Node(value)
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list[list.head];
    }
    //if it exists
    list.tail = Node(value);

    //if list is not empty => list.tail=Node(value)
  };

  list.removeHead = function() {
    // if (list.head === null) {
    //   return; // if current head is null then we will just return
    // }
    // var oldHead = list.head.value; // save currentHead to a oldHead variable
    // list.head = list.head.next;


    // // oldHead = Node(); // get rid of the old head

    // return oldHead; //return old head
    list.head = list.head.next.value;

  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
