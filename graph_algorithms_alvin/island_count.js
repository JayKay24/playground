const gridIslandCount = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

function explore(grid, r, c, visited) {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  if (visited[r][c]) return false;

  visited[r][c] = true;

  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);

  return true;
}
function islandCount(grid) {
  const visited = Array.from(new Array(grid.length), () =>
    new Array(grid[0].length).fill(false)
  );
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }

  return count;
}
islandCount(gridIslandCount);
let grid2 = [
  ["W", "W"],
  ["W", "W"],
  ["W", "W"],
];
islandCount(grid2);
