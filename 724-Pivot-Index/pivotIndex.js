/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var i = 0;
    leftSum = 0;
    rightSum = 0;
    var l = nums.length;
    while(i<l){
        leftSum = nums.slice(0,i).reduce((a,b) => a + b, 0);
        rightSum = nums.slice(i+1,l).reduce((a,b) => a + b, 0);
        //console.log(leftSum);
        //console.log(rightSum +"\n");
        
        if (leftSum === rightSum){
            return i
        }
        
        i++;
    }
    return -1;
};
