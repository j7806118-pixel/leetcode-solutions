function isSameTree(p, q) {
    // Both are empty
    if (p === null && q === null) {
        return true;
    }

    // One is empty, the other is not
    if (p === null || q === null) {
        return false;
    }

    // Values are different
    if (p.val !== q.val) {
        return false;
    }

    // Check left subtrees and right subtrees
    return (
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    );
}