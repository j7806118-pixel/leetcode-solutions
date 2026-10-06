function solve(board) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c) {
        // Out of bounds
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols
        ) {
            return;
        }

        // Not an O
        if (board[r][c] !== "O") {
            return;
        }

        // Mark as safe
        board[r][c] = "#";

        // Explore 4 directions
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    // Top and bottom rows
    for (let c = 0; c < cols; c++) {

        if (board[0][c] === "O") {
            dfs(0, c);
        }

        if (board[rows - 1][c] === "O") {
            dfs(rows - 1, c);
        }
    }

    // Left and right columns
    for (let r = 0; r < rows; r++) {

        if (board[r][0] === "O") {
            dfs(r, 0);
        }

        if (board[r][cols - 1] === "O") {
            dfs(r, cols - 1);
        }
    }

    // Flip surrounded regions
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (board[r][c] === "O") {
                board[r][c] = "X";
            }

            if (board[r][c] === "#") {
                board[r][c] = "O";
            }
        }
    }
}