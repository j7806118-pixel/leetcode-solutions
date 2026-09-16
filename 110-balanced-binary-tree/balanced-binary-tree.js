function isBalanced(root) {
    function height(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = height(node.left);

        if (leftHeight === -1) {
            return -1;
        }

        let rightHeight = height(node.right);

        if (rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return height(root) !== -1;
}     