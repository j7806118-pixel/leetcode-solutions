var floodFill = function(image, sr, sc, color) {
    let originalColor = image[sr][sc];

    // If both colors are the same, nothing needs to change.
    if (originalColor === color) {
        return image;
    }

    let rows = image.length;
    let cols = image[0].length;

    function dfs(r, c) {
        // Check boundaries and original color.
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            image[r][c] !== originalColor
        ) {
            return;
        }

        // Change the current pixel's color.
        image[r][c] = color;

        // Explore all four directions.
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    }

    dfs(sr, sc);

    return image;
};