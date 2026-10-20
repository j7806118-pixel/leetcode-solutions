/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    const m = nums1.length;
    const n = nums2.length;
    let bestResult = [];

    // i is the number of digits taken from nums1
    const start = Math.max(0, k - n);
    const end = Math.min(k, m);

    for (let i = start; i <= end; i++) {
        const sub1 = maxSingleNumber(nums1, i);
        const sub2 = maxSingleNumber(nums2, k - i);
        const merged = merge(sub1, sub2);
        
        if (compare(merged, bestResult, 0, 0) > 0) {
            bestResult = merged;
        }
    }

    return bestResult;
};

// Helper 1: Find the maximum number of length k from a single array
function maxSingleNumber(nums, k) {
    const stack = [];
    let drop = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums[i] && drop > 0) {
            stack.pop();
            drop--;
        }
        stack.push(nums[i]);
    }
    return stack.slice(0, k);
}

// Helper 2: Merge two arrays to form the largest number
function merge(nums1, nums2) {
    const result = [];
    let i = 0, j = 0;
    while (i < nums1.length || j < nums2.length) {
        if (compare(nums1, nums2, i, j) > 0) {
            result.push(nums1[i++]);
        } else {
            result.push(nums2[j++]);
        }
    }
    return result;
}

// Helper 3: Compare two array slices lexicographically to see which is larger
function compare(nums1, nums2, i, j) {
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] !== nums2[j]) {
            return nums1[i] - nums2[j];
        }
        i++;
        j++;
    }
    return (nums1.length - i) - (nums2.length - j);
}