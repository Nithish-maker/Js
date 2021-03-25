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

class Node {
  constructor(data,next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insertion operations 

  insertStart(data){
    let node = new Node(data);
    if(this.head == null) {
      this.head = node;
    }
    else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
}
  insertEnd(data) {
    let node = new Node(data,null);
    let temp;
    if(this.head == null) {
      this.head = node;
    }
    else {
      temp = this.head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;  
    }
    this.size++;
  }
  insertMid(data,index) {
    let node = new Node(data);
    let temp;
    if(index == 0) {
      insertStart(data);
    }
    else if(index > this.size) {
      alert("invalid index");
    }
    else if(index == this.size) {
      insertEnd(data);
    }
    else {
      let i = 1;
      temp = this.head;
      while(i < index - 1) {
        temp = temp.next;
        i++;
      }
      node.next = temp.next;
      temp.next = node;
    }
    this.size++;
  }
  insertAfter(data,ele) {
    let newNode = new Node(data);
    let temp;
    if(this.head == null) {
      this.head = node;
    }
    else {
      temp = this.head;
      //let anTemp = this.head.next;
      while(temp.data != ele) {
        temp = temp.next;
        //anTemp = anTemp.next;
      }
      if(temp.data == ele){
        newNode.next = temp.next;
        temp.next = newNode;
      }
    }
    this.size++;
  }
  deleteStart() {
    if(this.head == null) {
      alert("underflow");
    }
    else {
      let temp = this.head;
      this.head = this.head.next;
      this.size--;
    }
  }
  deleteEnd() {
    let temp = this.head;
    let anTemp = this.head.next;
    while(anTemp.next != null) {
      temp = temp.next;
      anTemp = anTemp.next;
    }
    temp.next = null;
    this.size--;
  }
  deleteMid(index) {
    let temp = this.head;
    let anTemp = this.head.next;
    let i = 1;
    while(i < index - 1) {
      anTemp = anTemp.next;
      temp = temp.next;
      i++;
    }
    temp.next = anTemp.next;
    this.size--;
  }

  printLl() {
    let temp = this.head;
    while(temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
//object instantiation from linked list 
const ll = new LinkedList();
//accessing member function via . operator for the created object
ll.insertStart(10);
ll.insertStart(30);
ll.insertEnd(45);
ll.insertEnd(65);
ll.insertMid(35,2);
ll.insertAfter(50,45);
ll.deleteStart();
ll.deleteEnd();
ll.deleteMid(3);
ll.printLl();

//stack operations using array
class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }
  isEmpty() {
    if(this.top == -1) {
      return 1;
    }
    return 0;
  }
  push(ele) {
      this.top++;
      this.data[this.top] = ele;
  }
  pop() {
    if(this.isEmpty()) {
      console.log("Stack underflown");
    }
    else {
      let remEle = this.data[this.top];
      this.top--;
      this.data.pop();
      console.log(`Popped element is ${remEle}`);
    }
  }
  length() {
    console.log(this.data.length);
  }
  peek() {
    console.log(`Top element is ${this.data[this.top]}`);
  }
  display() {
      for(let i = this.top; i >= 0; i--) {
        console.log(this.data[i]);
      }
  }
  clear() {
    this.head = null;
  }
}

let s = new Stack();
s.push(9);
s.push(24);
s.push(34);
s.push(45);
//s.peek();
//s.pop();
s.display();
s.length();

//stack using linked list 

class Stack {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class StackUsingLL {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isFull() {
    if(this.top == this.size - 1) {
      return 1;
    }
    return 0;
  }
  isEmpty() {
    if(this.top == null) {
      return true;
    }
    return false;
  }
  push(ele) {
    let node = new Stack(ele);
    if(this.top == null) {
      this.top = node;
      console.log(`Pushed element is ${node.data}`);
    }
    else if(this.isFull()) {
      alert("Stack overflown");
    }
    else {
      node.next = this.top;
      this.top = node;
      console.log(`Pushed element is ${node.data}`);
    }
    this.size++;
  }
  pop() {
    if(this.isEmpty()) {
      alert("Stack underflow");
    }
    else {
      let temp = this.top;
      this.top = this.top.next;
      console.log(`Popping element ${temp.data}`);
      this.size--;
    }
  }
  length() {
    console.log(`Size of the stack is ${this.size}`);
  }
  peek() {
    console.log(`Peek element is ${this.top.data}`);
  }
  clear() {
    console.log("Clearing stack");
    this.top = null;
    this.size = 0;
  }
  toArray() {
    let arr = [];
    let temp = this.top;
    while(temp != null) {
      arr.push(temp.data);
      temp = temp.next;
    }
    return arr;
  }
  display() {
    if(this.top) {
      let temp = this.top;
      console.log("Displaying elements");
      while(temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
    else {
      console.log("No elements to be displayed");
    }
  }
}

let s = new StackUsingLL();
s.push(10);
s.push(20);
s.push(30);
let bool = s.isEmpty();
console.log(bool);
s.pop();
s.display();
console.log(s.toArray());
s.peek();
s.length();
s.clear();
s.display();
 
