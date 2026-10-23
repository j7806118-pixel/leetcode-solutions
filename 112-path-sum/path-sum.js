/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Base case: if the tree is empty, there are no root-to-leaf paths
    if (!root) {
        return false;
    }
    
    // Subtract the current node's value from the targetSum
    targetSum -= root.val;
    
    // If it's a leaf node, check if the remaining targetSum is 0
    if (!root.left && !root.right) {
        return targetSum === 0;
    }
    
    // Recursively check left and right subtrees
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};