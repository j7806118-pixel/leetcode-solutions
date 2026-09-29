function generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Choice 1: add '('
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Choice 2: add ')'
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
}