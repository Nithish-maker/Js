 
console.log("js rendering properly");
//globally declared hand selectors for this project
const secondHand = document.querySelector('.secondhand');
const minuteHand = document.querySelector('.minutehand');
const hourHand = document.querySelector('.hourhand');
const audio = document.querySelector('.secondhand audio');
//for rotating the hand with a respective degree
function rotateHand(hand,deg) {
	return hand.style.transform = `rotate(${deg}deg)`;
}
//calculation of degrees for every  respective hands
function calculateDegree(unit,total) {
	return (((unit / total) * 360) + 90); 
}
function setDate(){
		const now=new Date();
		const seconds= now.getSeconds();
		const minutes=now.getMinutes();
		const hours=now.getHours();
		let secondDegrees = calculateDegree(seconds,60);
		rotateHand(secondHand,secondDegrees);
		//audio.play();
		if(seconds === 0) {
			secondHand.classList.add('fast');
		}
		if(seconds === 1) {
			secondHand.classList.remove('fast');
		}
		let minutesDegrees = calculateDegree(minutes,60);
		rotateHand(minuteHand,minutesDegrees);
		if(minutes === 0) {
		 	minuteHand.classList.add('fast');
		 	//console.log("added");
		}
		if(minutes === 1) {
		 	minuteHand.classList.remove('fast');
		 	//console.log("removed");
		}

		let hourDegrees = calculateDegree(hours,12);
		rotateHand(hourHand,hourDegrees);
		if(hours === 0) {
		 	hourHand.classList.add('fast');
		 	console.log("added");
		}
		if(hours === 1) {
		 	hourHand.classList.remove('fast');
		 	console.log("removed");
		}
	}
	setInterval(setDate, 1000);