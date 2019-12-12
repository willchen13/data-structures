var Queue=function(){
  this.tail=0;
  this.head=0;
  this.obj={};
}

Queue.prototype.enqueue=function(value){
  this.obj[this.tail]=value;
  this.tail++;
}

Queue.prototype.dequeue=function(){
  if(this.tail>this.head){ //tail-head=sizeQueue
    var val= this.obj[this.head];
    delete this.obj[this.head];
    this.head++
    return val;
  }
}

Queue.prototype.size=function(){
  if(this.tail>this.head){
    return this.tail-this.head;
  }
  return 0;
}
