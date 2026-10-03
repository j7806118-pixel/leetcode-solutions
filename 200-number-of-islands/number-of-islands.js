function numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {

        // Outside the grid
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols
        ) {
            return;
        }

        // Water
        if (grid[r][c] === "0") {
            return;
        }

        // Mark as visited
        grid[r][c] = "0";

        // Explore all 4 directions
        dfs(r - 1, c); 
        dfs(r + 1, c); 
        dfs(r, c - 1); 
        dfs(r, c + 1);
    }

    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}  