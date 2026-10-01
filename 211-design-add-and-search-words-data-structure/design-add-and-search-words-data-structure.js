class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let current = this.root;

        for (const char of word) {

            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }

            current = current.children[char];
        }

        current.isEnd = true;
    }

    search(word) {

        function dfs(node, index) {

            if (index === word.length) {
                return node.isEnd;
            }

            const char = word[index];

            if (char !== ".") {

                if (!node.children[char]) {
                    return false;
                }

                return dfs(node.children[char], index + 1);
            }

            for (const child of Object.values(node.children)) {

                if (dfs(child, index + 1)) {
                    return true;
                }
            }

            return false;
        }

        return dfs(this.root, 0);
    }
}  