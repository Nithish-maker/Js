 
//console.log("js Rendered successfully");
const genArr = document.querySelector('.navbar-brand');

//creating an array of random nos pf length n 
// let heightInt = [];
// let iter = 0;
// while(iter < 10) {
// 	let randomInt = Math.floor(Math.random() * 100 + 1);
// 	if(heightInt.indexOf(randomInt) === -1) {
// 		heightInt.push(randomInt);
// 	}
// }
function createDivs() {
	for(let i = 0; i < 10; i++) {
		let div = document.createElement('div');
		div.className = 'bar';
		document.querySelector('.bars').appendChild(div);
	}
	return div;	
}


// console.log(createDivs());
genArr.addEventListener('click',createDivs);