/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
module.exports = removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
