var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(start, current, remaining) {

        // Found a valid combination
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        // Exceeded the target
        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Choose
            current.push(candidates[i]);

            // Explore
            // Use i, not i + 1, because we can reuse the same number
            backtrack(i, current, remaining - candidates[i]);

            // Undo
            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
};