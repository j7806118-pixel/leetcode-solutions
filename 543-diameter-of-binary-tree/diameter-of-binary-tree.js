function diameterOfBinaryTree(root) {

    let diameter = 0;

    function depth(node) {

        if (node === null) {
            return 0;
        }

        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);

        diameter = Math.max(
            diameter,
            leftDepth + rightDepth
        );

        return 1 + Math.max(leftDepth, rightDepth);
    }

    depth(root);

    return diameter;
}