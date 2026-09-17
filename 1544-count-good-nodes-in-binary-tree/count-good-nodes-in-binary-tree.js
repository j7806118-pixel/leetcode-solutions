function goodNodes(root) {

    function dfs(node, maxValue) {

        if (node === null) {
            return 0;
        }

        let count = 0;

        if (node.val >= maxValue) {
            count = 1;
            maxValue = node.val;
        }

        count += dfs(node.left, maxValue);
        count += dfs(node.right, maxValue);

        return count;
    }

    return dfs(root, root.val);
}   