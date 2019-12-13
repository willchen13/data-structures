var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check to see if tail/head exists in the linked list

    if (!list.tail) {
      list.head = list.tail = Node(value);
    } else {

      var oldTail = list.tail;

      //add a tail to the the list
      list.tail = Node(value);

      oldTail.next = list.tail;
    }
  };


  list.removeHead = function(value) {
    if (!list.head) {
      list.head = list.tail = Node(value);
    } else {
      var removedHead = list.head;

      if (list.head === list.tail) {
        list.head = list.tail = null;
      } else {

        list.head = list.head.next;
      }
      return removedHead.value;
    }
  };

  list.contains = function(target) {
    var tracker = list.head;

    while (tracker) {
      if (tracker.value === target) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
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
