/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = isPalindrome = (x) => {
  //Implementation converting to String
  /*
  How:
  1- Lets convert the received number (x) to as String.
  2- Lets split it using split("") to make it an array of characters.
  3- Lets use reverse() to invert this array of characters.
  4- Lets make it a string again using join("").
  
  5- Now we will parse it to int and compare it to x to see if they are the same.
  Return true if yes and false if no.
  */
  /*
  Solution 01:
  Using String and Array methods:

  let reverse = x.toString().split("").reverse().join("");
  return x === parseInt(reverse) ? true : false;

  */
  /*
  Solution 02:
  Using String and Array methods:
  

  let correctString = x.toString(); //'121'
  let reversedString = "";

  for (let i = correctString.length - 1; i >= 0; i--) {
    reversedString += correctString[i];
  }

  return parseInt(reversedString) === x ? true : false;
  */

  /*
Solution 03:
Without Converting x to String

  Every Loop we will multiply reversed by 10 to give it one decimal case, and we will add the mod of target divided by 10.
  We will divide target by 10 to remove a decimal case from it and round it down.

    
    For Example: Parameter x = 121
    First loop:
    reversed = 0*10+(121%10) ==> 0+1 ==> 1
    target = 121/10 (Round down) ==> 12

    Second Loop:
    reversed = 1*10+1(12%10) ==> 10 + 2 ==> 12
    target = 12/10 (Round down) ==> 1

    Third loop: 
    reversed = 12*10+1%10 ==> 120 + 1 ==> 121
    target = 1/10 (Round Down) ==> 0

    End of Loop (target === 0)

    return reversed === x 

    */
  if (x < 0) return false;
  let target = x;
  let reversed = 0;

  while (target !== 0) {
    reversed = reversed * 10 + (target % 10);
    target = Math.floor(target / 10);
  }

  return x === reversed ? true : false;
};
