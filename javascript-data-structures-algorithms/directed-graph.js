class DirectedGraph {
  constructor() {
	this.edges = {};
  }

  addVertex(vertex) {
	this.edges[vertex] = {};
  }

  addEdge(origVertex, destVertex, weight) {
	if(weight === undefined) {
	  weight = 0;
	}
	this.edges[origVertex][destVertex] = weight;
  }

  removeEdge(origVertex, destVertex) {
	if(this.edges[origVertex] && this.edges[origVertex][destVertex] !== undefined) {
	  delete this.edges[origVertex][destVertex];
	}
  }

  removeVertex(vertex) {
	for(let adjacentVertex in this.edges[vertex]) {
	  this.removeEdge(adjacentVertex, vertex);
	}

	delete this.edges[vertex];
  }

  traverseBFS(vertex, fn) {
	const queue = [];
	const visited = {};

	queue.push(vertex);

	while(queue.length > 0) {
	  const currentVertex = queue.shift();
	  if(!visited[currentVertex]) {
		visited[currentVertex] = true;
		fn(currentVertex);
		for(let adjacentVertex in this.edges[currentVertex]) {
		  queue.push(adjacentVertex);
		}
	  }
	}
  }

  traverseDFS(vertex, fn) {
	const visited = {};
	this._traverseDFS(vertex, visited, fn);
  }

  _traverseDFS(vertex, visited, fn) {
	visited[vertex] = true;
	fn(vertex);

	for(let adjacentVertex in this.edges[vertex]) {
	  if(!visited[adjacentVertex]) {
		this._traverseDFS(adjacentVertex, visited, fn);
	  }
	}
  }

  _topologicalSortUtil(v, visited, stack) {
	visited.add(v);

	for(let item in this.edges[v]) {
	  if(!visited.has(item)) {
		this._topologicalSortUtil(item, visited, stack);
	  }
	}

	stack.unshift(v);
  }

  topologicalSort() {
	let visited = new Set(),
	  stack = [];

	for(let item in this.edges) {
	  if(!visited.has(item)) {
		this._topologicalSortUtil(item, visited, stack);
	  }
	}

	return stack;
  }
}
