'use strict';
const getPallidrome = (num) =>{
let numString = num.toString();
let reverseNumString = numString.split('').reverse().join('');
if (numString === reverseNumString) return num;
return getPallidrome(num + parseInt(reverseNumString));
};
console.log(getPallidrome(566));
