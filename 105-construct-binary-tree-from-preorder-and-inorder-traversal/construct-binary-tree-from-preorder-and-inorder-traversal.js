var buildTree = function(preorder, inorder) {
    // Store each value's index in inorder
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function dfs(left, right) {
        // No elements in this subtree
        if (left > right) {
            return null;
        }

        // First element in preorder is the root
        const rootValue = preorder[preorderIndex];
        preorderIndex++;

        const root = new TreeNode(rootValue);

        // Find root position in inorder
        const rootIndex = inorderMap.get(rootValue);

        // Build left subtree
        root.left = dfs(left, rootIndex - 1);

        // Build right subtree
        root.right = dfs(rootIndex + 1, right);

        return root;
    }

    return dfs(0, inorder.length - 1);
};