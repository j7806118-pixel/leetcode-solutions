function findWords(board, words) {

    class TrieNode {
        constructor() {
            this.children = {};
            this.word = null;
        }
    }

    const root = new TrieNode();

    // Build Trie
    for (const word of words) {
        let node = root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.word = word;
    }

    const result = [];
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, node) {

        const char = board[r][c];

        // No Trie path for this character
        if (!node.children[char]) {
            return;
        }

        node = node.children[char];

        // Found a complete word
        if (node.word !== null) {
            result.push(node.word);

            // Prevent duplicate results
            node.word = null;
        }

        // Mark current cell as visited
        board[r][c] = "#";

        // Explore 4 directions
        if (r > 0) {
            dfs(r - 1, c, node);
        }

        if (r < rows - 1) {
            dfs(r + 1, c, node);
        }

        if (c > 0) {
            dfs(r, c - 1, node);
        }

        if (c < cols - 1) {
            dfs(r, c + 1, node);
        }

        // Undo
        board[r][c] = char;
    }

    // Start DFS from every cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
}