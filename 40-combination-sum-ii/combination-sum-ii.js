var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, current, remaining) {

        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicate choices at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Choose
            current.push(candidates[i]);

            // Explore
            backtrack(
                i + 1,
                current,
                remaining - candidates[i]
            );

            // Undo
            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
};