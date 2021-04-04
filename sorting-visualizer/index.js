 
//console.log("js Rendered successfully");

//creating an array of random nos pf length n 
let heightInt = [];
let iter = 0;
while(iter < 530) {
	let randomInt = Math.floor(Math.random() * 100 + 1);
	if(heightInt.indexOf(randomInt) === -1) {
		heightInt.push(randomInt);
	}
}
console.log(heightInt);