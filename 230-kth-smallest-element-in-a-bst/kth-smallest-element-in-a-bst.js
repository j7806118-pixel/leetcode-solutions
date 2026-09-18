function kthSmallest(root, k) {
    let count = 0;

    function inorder(node) {
        if (node === null) {
            return null;
        }

        let leftResult = inorder(node.left);

        if (leftResult !== null) {
            return leftResult;
        }

        count++;

        if (count === k) {
            return node.val;
        }

        return inorder(node.right);
    }

    return inorder(root);
} 