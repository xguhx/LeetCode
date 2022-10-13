/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  /*
  
  // Naive implementation - Two Nested For Loops
  //(O)n*2 time complexity

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  */

  //==================================
  //Better Implementation using Object
  //Better time complexity
  //Worst space complexity

  /*
    Parameters: nums = [2, 7, 11, 15], target = 9

    First we will create a container to store Key value pairs so we can control what we did already.
    Our container will work like this:

    result = {
        "The number I need to achieve Target": "The index of the for loop that I calculated that",
    }

    We will loop through all the elements in nums and do a if check every time.

    How our if check works:

    Do we have nums[i] as key? Because I need nums[i] as a key to achieve the value of target.

    No: 
    Lets add the difference between target and nums[i] to our container.

    Why? Doing this we know that the index of 0 has value of 2 and now its stored on our container;


    Yes:
    Then now I know I have what I need to achieve the target. I can return the result.

    For example:
    First loop: nums[i] = 2, index = 0 

    Our object is empty so our if check will always fail and we will add a key value pair to our container

    result[target-nums[i]] = i
    9-2=7; (I need a 7 to reach 9)
    result = {
        
        7(9-2=7):0(Index),
    }

    Second loop: nums[i] = 7, index = 1
    We will check if we have result[nums[i]] (result[7]). We do, because in the previous loop we added it as a result of 9-2.
    So now I know that we got what we needed. We have a 2 and a 7 which sums up to target.
    Lets return [result[nums[i]], i] (the value stored in result[7] and the actual index of our for loop)

    */

  //Create a Hash map (Object) to store key value pairs
  let result = {};

  for (let i = 0; i < nums.length; i++) {
    //If we have a Key that is the value of nums[i], return [result[nums[i]], i] (The index value stored in result[nums[i]] key and the actual index of for loop)

    if (result[nums[i]] !== undefined) return [result[nums[i]], i];

    //If we don't have result[nums[i]], then we add the difference

    result[target - nums[i]] = i;
  }
};

module.exports = twoSum;
