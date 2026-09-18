function isValidBST(root) {
    function dfs(node, min, max) {

        if (node === null) {
            return true;
        }


        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            dfs(node.left, min, node.val) &&
            dfs(node.right, node.val, max)
        ); 
    }

    return dfs(root, -Infinity, Infinity);  
} 