

var HashTable = function() {

  this._limit = 8; // limit of the limited array to 8
  this._storage = LimitedArray(this._limit); //limited array max size is 8
};

//
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //get the reference of the bucket at that index and store it to a variable
  var bucket = this._storage.get(index);

  //if bucket doesn't exist then create a new bucket
  if (bucket === undefined) {
    bucket = [[k, v]];


  //we have to add it to the bucket
  this._storage.set(index, bucket);

  }
  //if bucket does exist
  //iterate through the bucket and we check each key to see if it exists
  //if it does then we change

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    } else {
      bucket.push([k, v]);
    }
  }
  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for ( var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for ( var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      delete bucket[i][1];
    }
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 insert => linear
 retrieve => linear
 remove => linear
 */


