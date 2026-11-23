function containsDuplicate(nums) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const count = (seen.get(nums[i]) ?? 0) + 1;
    seen.set(nums[i], count);

    if (count > 1) {
      return true;
    }
  }

  return false;
}