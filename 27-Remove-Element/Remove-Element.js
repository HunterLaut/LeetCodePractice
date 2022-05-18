/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let x;
    var i = 0;
    for (x in nums){
        console.log(x);
        if (nums[x] != val){
            nums[i] = nums[x];
            i++;
        } 
    }
    return i;
};