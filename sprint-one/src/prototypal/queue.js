var Queue = function() {
  var instance=Object.create(queueMethods);
  instance.tail=0;
  instance.head=0;
  instance.storage={};

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail]=value;
    this.tail++;

  },
  dequeue: function(){
    if(this.tail>=this.head){
      var val=this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return val;
    }
  },
  size: function(){
    if(this.tail>=this.head){
      return this.tail-this.head;
    }
    return 0;
  }

};


