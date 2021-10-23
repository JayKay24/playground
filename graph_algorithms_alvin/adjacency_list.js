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
