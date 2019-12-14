class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  };
  insert (value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }

    var currentNode = this.root;

    //if inserted value is less than current Node
    if (value < currentNode.value) {
      //check if a left node exists
      if (!currentNode.left) {
        currentNode.left = new Node(value);
      } else {
        //if left node does exist
        currentNode.left.insert(value);
      }
    } //if inserteved value is greater than the node
    else {
      if (!currentNode.right) {
        currentNode.right = new Node(value);
      } else {
        currentNode.right.insert(value);
      }
      }
    }
  }


  contains(value) {
    // if(currentNode.value = value) {
    //   return true;
    // } else if
  };

  depthFirstLog(cb) {

  };
}

var binaryTree = new BinarySearchTree()



/*
 * Complexity: What is the time complexity of the above functions?
 */
