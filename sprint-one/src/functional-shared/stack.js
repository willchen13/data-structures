var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance={
    sizeP: 0,
    storage: {}
  };


_.extend(instance,stackMethods);

return instance;

};

var stackMethods = {
  push: function(value){
    this.storage[this.sizeP]=value; //index=size-1
    this.sizeP++;
  },
  pop: function(){
    if(this.sizeP>=0){
      this.sizeP--; //index=size =>size-1
      var end=this.storage[this.sizeP];
      delete this.storage[this.sizeP];
      return end;
    }
  },
  size: function(){
    if(this.sizeP<0){
      return 0;
    }
    return this.sizeP;
  }

};


