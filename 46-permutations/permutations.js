var permute = function(nums) {
    const result = [];
    const current = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        // Complete permutation
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        // Try every element
        for (let i = 0; i < nums.length; i++) {

            // Already used → skip
            if (used[i]) {
                continue;
            }

            // Choose 
            current.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack();

            // Undo
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};