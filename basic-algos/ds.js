//array insertion operations
let arr = [23,56,69];
//insertion at the start
let ele = parseInt(prompt("Enter no to be inserted"));
const insertStart = (num) => {
  arr.unshift(num);
  return arr;
}
insertStart(ele);
//insertion at the mid
let ind = parseInt(prompt("Enter the index"));
const insertMid = (num, index) => {
  arr.splice(index,0,num);
  return arr;
}
insertMid(ele,ind);
//insertion at the end
const insertEnd = (num) => {
  arr.push(num);
  return arr;
}
insertEnd(ele);
//deletion operations
let arr = [23,45,67,89];
//deletion at the start
const delStart = () => {
  arr.shift();
  return arr;
}
delStart();
//deletion at the end
const delEnd = () => {
  arr.pop();
  return arr;
}
delEnd();
//deletion at the mid
const delMid = (ind) => {
  arr.splice(ind,1);
  return arr;
} 
delMid(ind);
//linear search of an element
let arr = [12,34,56,7,89];
const searchLin = (arr,ele) => {
  let ind;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === ele) {
     ind = i;
    }
  }
  console.log(`Element ${ele} found at ${ind} position`);
}
searchLin(arr,34);
//binary search 
let arr = [23,45,67,89];
let ele = parseInt(prompt("Enter element to be searched"));
let start = 0;
let end = arr.length - 1;
const binSearch = (num) => {
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === num) {
      console.log(`Element found at ${mid}`);
      break;
    }
    if(num < arr[mid]) {
      console.log("Searching at the left of the array");
      end = mid - 1;
    }
    else {
      console.log("Searching at the right of the array");
      start = mid + 1;
    }
  }
}
binSearch(ele);
 
