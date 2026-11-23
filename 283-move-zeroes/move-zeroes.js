
function moveZeroes(nums){
    let left = 0;
    
    for (let right = 0; right<nums.length;right++){
        if(nums[right]!== 0 ){
           const temp = nums[left];
           nums[left] = nums[right];
           nums[right] = temp;
           left++;
        }
    }
}