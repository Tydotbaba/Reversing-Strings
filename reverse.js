/*
  This function accepts a string as an 
  argument and returns it reversed.
  there are two ways i've implemented this
*/


// first implementation; using built-in functions
function reverseString(str) {
  ///let strs = str.split("");
  ///var arr = strs.reverse();
  ///var s = arr.join("");
  return str.split("").reverse().join("");
}

// second implementation; using array
function reverseByArray(str) {
  var s = "";
  for(let i = str.length - 1; i >= 0; i--){
    s += str[i];
  }
  return s;
}

console.log(reverseString("olleh"));
console.log(reverseByArray("oyaT"));
console.log(reverseString("adohR"));
