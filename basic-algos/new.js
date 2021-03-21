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

//maximum char count 
var str = prompt("Enter string");
let result = {};
const maximumChar = string => {
  for(let char of str) {
    result[char] = result[char] + 1 || 1;
  }
  let maxCount = 0;
  let maxChar = null;
  for(let ch in result) {
    if(result[ch] > maxCount) {
      maxCount = result[ch];
      maxChar = ch;
    }
  }
  return maxChar;
}
console.log(maximumChar(str));

//reversing an array 

let arr = [1,2,3,4,5];
const reverse = array => {
	for(let i = 0; i < array.length / 2; i++) {
		let temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return arr;
}
console.log(reverse(arr));

//reversing an array easy peasy
let arr = [1,2,3,4,5];
const reversing = array => {
	return array.reverse();
}

//word reversal 
const wordRev = str => {
	return str.split(" ").reverse().join(" ");
}
console.log(wordRev("Sentence to be reversed"));

//capitalizing sentences 
let str = prompt("Enter a string");
const capitalizeWord = string => {
 return string[0].toUpperCase() + string.slice(1,string.length);
}
const capitalize = string => {
  return string.split(" ").map((iter) => capitalizeWord(iter)).join(" ")
}

console.log(capitalize(str));

//mean of an array 
let arr = [1,2,3,4,5];
let sum = 0;
const mean = array => {
	for(let i = 0; i < array.length; i++) {
		sum+=array[i];
	}
	return (sum / (array.length));
}
console.log(mean(arr));

//median of an array 
let arr = [1,2,3,4,5,6,7];
const median = array => {
	let med = 0;
	let medEvenIndex = Math.round(array.length / 2);
	let medOddIndex = Math.round((array.length / 2) - 1);
	if(array.length % 2 === 0) {
		med = array[medEvenIndex] + (array[medEvenIndex] - 1);
	}
	else if(array.length % 2 != 0) {
		med = array[medOddIndex];
	}
	return med;
}
console.log(median(arr));

//mode of an  array

let arr = [1,2,3,3,4,5,5,6,6,7,7,7,7];
const mode = num => {
  let obj = {};
  let modes = [];
  for(let num of arr) {
    obj[num] = obj[num] + 1 || 1;
  }
  let max = 0;
  for(let i in obj) {
    let count = obj[i];
    if(count > max) {
      max = count;
      modes = [i];
    }
    else if(count == max) {
      modes.push(i);
    }
  }
  return modes;
}
console.log(mode(arr));
