/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var i = 0;
    var sums = []
    while (i<nums.length){
        //console.log(nums.slice(0,i+1));
        sums[i] = nums.slice(0,i+1).reduce((a, b)=> a + b, 0);
        i++
    }
    return sums;
};
