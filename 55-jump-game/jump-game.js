function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // If this index is unreachable, we are stuck.
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);

        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true;
}
