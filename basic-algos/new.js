//string reversal standard method
var str = prompt("ENter a string");
var i = str.length - 1;
var result = "";
const reverse = string => {
  for(let it = i; it >= 0; it--) {
  result+=str[it];
}
  return result;
}
console.log(reverse(str));

//string reversal modern method
var str = prompt("Enter string");
const reverse = string => string.split("").reverse().join("")
console.log(reverse(str));

//palindrome  iterative method
var str = prompt("Enter a string");
const isReverse = string => {
  return string.split("").every((char,index) => 
    char === string[string.length - 1 - index]
  )
}
console.log(isReverse(str));

//palindrome normal method 
var str = prompt("Enter string");
const reverse = string => string.split("").reverse().join("") === str ? true : false;
console.log(reverse(str));

//integer reversal 
var integer = prompt("Enter the integer");
const reversal = num => {
  return integer.split("").reverse().join("")
}
console.log(reversal(integer));

// integer reversal iterative method 
var integer = parseInt(prompt("Enter an integer"));
const reversal = integer => {
  let rev = 0;
  let rem = 0;
  while(integer != 0) {
    rem = integer % 10;
    rev = rev * 10 + rem;
    integer = integer / 10;
  }
  return rev;
}
console.log(parseInt(reversal(integer)));

//fizz buzz program
let mesg = "";
for(let i = 1; i < 100; i++) {
  if(i % 2 === 0) {
    mesg+="fizz";
  }
  if(i % 3 === 0) {
    mesg+="buzz";
  }
}
console.log(mesg || i);

//vowel and consanant count 
let string = prompt("Ur string");
let vowCount = 0,consCount = 0;
const count = () => {
	string.toLowerCase().split("").map(iter => iter === 'a' || iter === 'e' || iter === 'i' || iter === 'o' || iter === 'u' ? vowCount++ : consCount++)
      console.log("Vowels are " + vowCount + " and consanants are " + consCount);
}
console.log(count());

//vowels and consanant count other way 
let string = prompt("Ur string");
let vowArr = "aeiou";
let count = 0;
const getCount = () => {
	string = string.toLowerCase();
	for(let ch of string) {
		if(vowArr.includes(ch)) {
			count++;
		}
		else {
			return -1;
		}
	}
  return count;
}
console.log(getCount());