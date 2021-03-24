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
	for(let i = 0; i < Math.floor(array.length / 2); i++) {
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

//sum of a range of a num

function getArr(start,end, step) {
  let arr = [];
  if(step > 0 && start < end) {
    for(let i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  }
  else if(step < 0 && start > end){
    for(let i = start; i >= end; i = i + step) {
      arr.push(i);
    }
  }
  else {
  	return 0;
  }
  return arr;
}
function sum(array) {
	let total = 0;
	for(let num of array) {
		total+=array[num];
	}
	return total;
}
console.log(sum(getArr(10,2,-2)));

//two sum iterative method 

let arr = [1, 2, 2, 3, 4];
let res = [];
const twoSum = (array,number) => {
	for(let i = 0; i < array.length; i++) {
		for(let j= i + 1; j < array.length; j++) {
			if(arr[i] + arr[j] === number) {
				res.push([arr[i],arr[j]]);	
			}
		}
	}
	return res;
}
console.log(twoSum(arr,4));

//twoSum efficient method

//checking duplicacy of elements in the array
//converting array to a set and comparing lengths of the set && array
let arr = [1,2,3,4,5];
const check = (arr) => {
  return new Set(arr).size == arr.length;
}
const remove = (arr) => {
  return new Set(arr);
}
//calculating the twoSum
const twoSum = (array,sum) => {
  if(check(arr)) {
    let obj = {};
    for(let i = 0; i < array.length; i++) {
      let value = array[i];
      let diff = sum - value;
      if(!obj.hasOwnProperty(diff)) {
        obj[value] = i;
      }
      else {
        return [obj[diff],i];
      }
    }
  }
  else {
     return twoSum(remove(arr));
  }
} 
console.log(twoSum(arr,6));

//age calculator  
const age = (c_date,c_month,c_year,b_date,b_month,b_year) => {
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  if(b_date > c_date) {
    c_date = c_date + month[b_month - 1];
    c_month = c_month - 1;
  }
  if(b_month > c_month) {
    c_year = c_year - 1;
    c_month = c_month + 12;
  }
  let diffDate = c_date - b_date;
  let diffMonth = c_month - b_month;
  let diffYear = c_year - b_year;
  console.log(`Your ${diffYear} years ${diffMonth} months and ${diffDate} days old`);
}
age(23,3,2021,20,1,2000);

//prime numbers uptill n using seive of eratosthenes

let num = parseInt(prompt("Enter a number"));
//declaring an array of a counter size
let arr = new Array(num + 1);
let primes = new Array();
const prime = (num) => {
  for (let i = 2; i <= num; i++) {
    arr[0] = false; 
    arr[1] = false;
    arr[i] = true;
  }
  for(let i = 2; i * i <= num; i++) {
    if(arr[i]) {
      for(let j = i * 2; j <= num; j+=i) {
        arr[j] = false; 
      }
    }
  }
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i]) {
      primes.push(i);
    }
  }
  return primes;
}
console.log(prime(num));

//fibo series 
let num = parseInt(prompt("Enter the number"));
const fibo = (num) => {
  let a = 0, b = 1;
  let c;
  console.log(a);
  console.log(b);
  for(let i = 2; i <= num; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
fibo(num);
//fibo using recursion
const fibo = (num) => {
  return num < 3 ? 1 : (fibo(num - 1) + fibo(num - 2));  
}
fibo(num);

//fibo optimized way
let num = parseInt(prompt("Enter a no"));
const fibo = (num) => {
  let arr = [0,1];
  for(let i = 2; i < num; i++) {
    arr.push(arr[(i-1)]+arr[(i-2)]);
  }
  return arr;
}
fibo(num);

//staircase or equilateral triangle pattern printing program
let num = parseInt(prompt("Enter a no"));
const staircase = (num) => {
  for(let i = "#"; i.length <= num; i = i + "#") {
    console.log(i);
  }
}
staircase(num);
