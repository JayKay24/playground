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

const hasPath = (graph, src, dest) => {
  if (src === dest) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest)) {
      return true;
    }
  }

  return false;
};
hasPath(graphHasPath, "f", "k");
hasPath(graphHasPath, "i", "h");
hasPath(graphHasPath, "i", "h");
hasPath(graphHasPath, "i", "k");
