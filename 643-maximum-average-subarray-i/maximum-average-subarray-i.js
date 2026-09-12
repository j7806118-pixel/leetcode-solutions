
function findMaxAverage(nums, k) {
    let sum = 0;
    let maxSum = -Infinity;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        if (right - left + 1 === k) {
            maxSum = Math.max(sum, maxSum);
            sum -= nums[left];
            left++;
        }
    }

    return maxSum / k;
}

