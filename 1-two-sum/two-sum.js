function twoSum(nums,target){
  const map = new Map();
   for(let i=0;i<nums.length;i++){
    let needed = target - nums[i];
    if(map.has(needed)){
        return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
}
console.log(twoSum([2,7,11,15],9)); 