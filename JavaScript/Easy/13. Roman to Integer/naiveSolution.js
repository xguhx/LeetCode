/**
 * @param {string} s
 * @return {number}
 */

module.exports = romanToInt = (s) => {
  /*
  Naive Implementation
  1 - Split the given string into an array.
  2 - Iterate through the array and check the array[i], array[i+1] and array[i-1].
  3 - Remove the combination of roman letters from the array.
  4 - Add the correspondent integer to the result variable.

  5- Repeat process until end of the array.
  6- Return result.




  let romanString = s.split("");
  console.log(romanString);
  let result = 0;

  //Check for 'I' after or before 'V' or 'X'
  //Check if 'I' comes after another 'I'
  for (let i = 0; i < romanString.length; i++) {
    if (
      romanString[i] === "I" &&
      romanString[i + 1] !== "V" &&
      romanString[i] === "I" &&
      romanString[i + 1] !== "X"
    ) {
      result++;
    } else if (romanString[i] === "I" && romanString[i + 1] === "V") {
      romanString.splice(i + 1, 1);
      result += 4;
    } else if (romanString[i] === "I" && romanString[i + 1] === "X") {
      romanString.splice(i + 1, 1);
      result += 9;
    }

  
    if (romanString[i] === "V") {
      result += 5;
    }

    //Check if 'X' comes before 'L' or 'C'
    if (romanString[i] === "X" && romanString[i + 1] === "L") {
      romanString.splice(i + 1, 1);
      result += 40;
    } else if (romanString[i] === "X" && romanString[i + 1] === "C") {
      romanString.splice(i + 1, 1);
      result += 90;
    } else if (romanString[i] === "X") {
      result += 10;
    }

    if (romanString[i] === "L") {
      result += 50;
    }

    //Checks if 'C' comes before 'D' or 'M'
    if (romanString[i] === "C" && romanString[i + 1] === "D") {
      romanString.splice(i + 1, 1);
      result += 400;
    } else if (romanString[i] === "C" && romanString[i + 1] === "M") {
      romanString.splice(i + 1, 1);
      result += 900;
    } else if (romanString[i] === "C") {
      result += 100;
    }

    if (romanString[i] === "D") {
      result += 500;
    }

    if (romanString[i] === "M") {
      result += 1000;
    }
  }

  return result;

  */
};
