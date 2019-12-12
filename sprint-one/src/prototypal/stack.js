var Stack = function() {
  var instance=Object.create(stackMethods);
  instance.sizeX=0;
  instance.storage={};

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.sizeX]=value;
    this.sizeX++;
  },
  pop: function(){
    if(this.sizeX>=1){
      this.sizeX--;
      let value=this.storage[this.sizeX];
      delete this.storage[this.sizeX];
      return value;
    }
  },
  size: function(){
    if(this.sizeX<0){
      return 0;
    }
    return this.sizeX;
  }
};


