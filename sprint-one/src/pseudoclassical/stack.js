var Stack = function() {
  this.sizeX=0,
  this.storage={}
};

Stack.prototype.push=function(value){
  this.storage[this.sizeX]=value;
  this.sizeX++;
};

Stack.prototype.pop=function(){
  if(this.sizeX>=1){
  this.sizeX--;
  let val=this.storage[this.sizeX];
  delete this.storage[this.sizeX]
  return val;
  }
};

Stack.prototype.size=function(){
  if(this.sizeX<0){
    return 0;
  }
  return this.sizeX;
};


