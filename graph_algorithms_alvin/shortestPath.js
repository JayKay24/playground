const graphObj = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const graph = new Map([
  ["a", ["b", "c"]],
  ["b", ["d"]],
  ["c", ["e"]],
  ["d", ["f"]],
  ["e", []],
  ["f", []],
]);

const graphHasPath = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const graphComponentsCount = new Map([
  [0, [8, 1, 5]],
  [1, [0]],
  [5, [0, 8]],
  [8, [0, 5]],
  [2, [3, 4]],
  [3, [2, 4]],
  [4, [3, 2]],
]);

const graphLargestComponent = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const edgesShortestPath1 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const edgesShortestPath2 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

function buildGraph(edges) {
  const graph = new Map();

  for (let edge of edges) {
    const [a, b] = edge;

    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    const aNeighbors = graph.get(a);
    const bNeighbors = graph.get(b);

    aNeighbors.push(b);
    bNeighbors.push(a);
  }

  return graph;
}

function shortestPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  console.log(graph);

  const queue = [[nodeA, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    visited.add(node);

    if (node === nodeB) return distance;

    for (let neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        console.log(queue);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}
shortestPath(edgesShortestPath1);
shortestPath(edgesShortestPath1);
shortestPath(edgesShortestPath1, "w", "z");
shortestPath(edgesShortestPath2, "b", "g");
