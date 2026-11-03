var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let rows = new Array(m).fill(false);
    let cols = new Array(n).fill(false);

    // Identify original zeros
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }

    // Update the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] || cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};