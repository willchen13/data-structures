

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add node
  this.nodes.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check to see if the node in the array
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  //remove the node
  // for (var value of this.nodes) {
  //   if (value === node) {
  //     this.nodes.splice(value, 1);
  //   }
  //}

  var currentNode = this;
  this.nodes.forEach(function(item, index) {
    if (item === node) {
      currentNode.nodes.splice(index, 1);
    }
  });
  //remove the associated edges (node and value)
  //iterate throught this.edges and see if one of the vertexs === node

  for (var edge of this.edges) {
    var fromVertex = edge[0];
    var toVertex = edge[1];
    if (fromVertex === node || toVertex === node) {
      this.edges.splice(edge, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  //iterate through the array and check to see if the keys or obj[key] is included?
  for (var edge of this.edges) {
    var fromVertex = edge[0];
    var toVertex = edge[1];
    //stringify the object edges
    if ((fromVertex === fromNode && toVertex === toNode) || (toVertex === fromNode && fromVertex === toNode)) {
      return true;
    }
  }
  return false;


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  //push nest array into the edges list
  this.edges.push([fromNode, toNode]);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var edge of this.edges) {
    var fromVertex = edge[0];
    var toVertex = edge[1];
    if ((fromVertex === fromNode && toVertex === toNode) || (fromVertex === toNode && toVertex === toNode)) {
      this.edges.splice(edge, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


