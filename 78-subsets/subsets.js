function subsets(nums) {
    const result = [];

    function backtrack(index, currentPath) {
        // Base case: processed all elements
        if (index === nums.length) {
            result.push([...currentPath]); // Push a copy of currentPath
            return;
        }

        // Include nums[index]
        currentPath.push(nums[index]);
        backtrack(index + 1, currentPath);

        // Exclude nums[index] (backtrack)
        currentPath.pop();
        backtrack(index + 1, currentPath);
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([3, 1, 2]));