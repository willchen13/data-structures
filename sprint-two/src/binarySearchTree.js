var BinarySearchTree = function (value) {
  //create a new instance of bst and set prototype to the bstmethods
  var bst= Object.create(bstMethods);

  this.value = value;
  this.left = null;
  this.right = null;

  return bst;
}

var bstMethods = {};

bstMethods.insert = function (value) {
  if (this.value === undefined) {
      this.value = value;
      return;
  }
  //if value is less than value of root
  if (this.value > value) {
  //check left
      if (this.left === null) {
          this.left === BinarySearchTree(value);
      } else {
          this.left.insert(value);
      }
      //check right
  } else {
      if (this.right === null) {
          this.right = BinarySearchTree(value);
      }else{
          this.right.insert(value);
      }
  }
};

binarySearchTreeMethods.contains = function(value){
  if( this.value === value){
      return value;
  }
  //check left
  if (this.value > value) {
      if(this.left === null) {
          return false;
      } else {
          return this.left.contains(value);
      }
  } else {
      //check right
      if (this.right === null) {
          return false;
      } else {
          return this.right.contains(value);
      }
  }
}

binarySearchTreeMethods.depthFirstLog = function(cb) {
  //accepts a callback and executes it on every value contained int eh tree
  cb(this.value);

  if(this.left) {
      cb(this.left.depthFirstLog(cb));
  }

  if(this.right) {
      cb(this.right.depthFirstLog(cb));
  }
}

/*
* Complexity: What is the time complexity of the above functions?
* insert=> O(logn), contains=> O(logn), depthFirstLog=>O(n)
*/