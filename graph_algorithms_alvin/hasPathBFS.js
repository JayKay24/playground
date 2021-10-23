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
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
hasPath(graphHasPath, "f", "k");
hasPath(graphHasPath, "i", "h");
