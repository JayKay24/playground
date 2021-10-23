const gridIslandCount = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const gridMinimumIsland = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

function minimumIsland(grid) {
  const visited = Array.from(new Array(grid.length), () =>
    new Array(grid[0].length).fill(false)
  );

  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);

      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
}

function exploreSize(grid, r, c, visited) {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return 0;

  if (grid[r][c] === "W") return 0;

  if (visited[r][c]) return 0;

  let size = 1;

  visited[r][c] = true;

  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r, c + 1, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);

  return size;
}
minimumIsland(gridMinimumIsland);
let grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];
minimumIsland(grid);
grid = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];
minimumIsland(grid);
grid = [
  ["W", "W"],
  ["L", "L"],
  ["W", "W"],
  ["W", "L"],
];
minimumIsland(grid);
