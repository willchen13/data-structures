var BinarySearchTree = function(value) {
    var bst = Object.create(binarySearchTreeMethods);

    bst.value = value;
    bst.left = null;
    bst.right = null;

    return bst;
  };

  var binarySearchTreeMethods = {};

  binarySearchTreeMethods.insert = function(value) {
    if (this.value === undefined) {
      this.value = value;
      return;
    }

    if (this.value > value) {
      // left
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      // right
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  };

  binarySearchTreeMethods.contains = function(value) {
    if (this.value === value) {
      return true;
    }

    if (this.value > value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  };

  binarySearchTreeMethods.depthFirstLog = function (cb) {
    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  };

/*
* Complexity: What is the time complexity of the above functions?
* insert=> O(logn), contains=> O(logn), depthFirstLog=>O(n)
*/