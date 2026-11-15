/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Encodes a tree to a single string using Preorder DFS.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split(",");
    let index = 0;

    function dfs() {
        if (nodes[index] === "null") {
            index++;
            return null;
        }

        const node = new TreeNode(parseInt(nodes[index], 10));
        index++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}; 