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

const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph.get(current)) {
      stack.push(neighbor);
    }
  }
};
depthFirstPrint(graph, "a");
