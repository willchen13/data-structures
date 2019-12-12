class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizeX=0;
    this.storage={};
  }

  push(value){
    this.storage[this.sizeX]=value;
    this.sizeX++
  };

  pop(){
    if(this.sizeX>0){
      this.sizeX--;
      let val=this.storage[this.sizeX];
      delete this.storage[this.sizeX];
      return val;
    }
  };

  size(){
    if(this.sizeX>0){
      return this.sizeX;
    }
    return 0;
  };
}