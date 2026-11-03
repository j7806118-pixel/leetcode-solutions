/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // Iterate through layers from the outside in
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let first = i;
        let last = n - 1 - i;
        
        for (let j = first; j < last; j++) {
            let offset = j - first;
            
            // Save top element in a temporary variable
            let top = matrix[first][j];
            
            // 1. Move left to top
            matrix[first][j] = matrix[last - offset][first];
            
            // 2. Move bottom to left
            matrix[last - offset][first] = matrix[last][last - offset];
            
            // 3. Move right to bottom
            matrix[last][last - offset] = matrix[j][last];
            
            // 4. Move top (saved) to right
            matrix[j][last] = top;
        }
    }
};  