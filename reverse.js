/*
  This function accepts a string as an 
  argument and returns it reversed.
*/

function reverseString(str) {
  ///let strs = str.split("");
  ///var arr = strs.reverse();
  ///var s = arr.join("");
  return str.split("").reverse().join("");
}

console.log(reverseString("olleh"));
console.log(reverseString("oyaT"));
console.log(reverseString("adohR"));
