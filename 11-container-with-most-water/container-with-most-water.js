function maxArea(heights){
    let maxArea = 0;
        let left = 0;
        let right = heights.length-1;

        while(left<right){
            let width = right - left;
            let height = Math.min(heights[left],heights[right]);
            let area = width*height;

            maxArea = Math.max(maxArea,area);

             if(heights[left]<heights[right]){
            left++;
        } else{
            right--;
        }
     }
     return maxArea;
    }
console.log(maxArea([1,8,6,2,5,4,8,3,7])); 