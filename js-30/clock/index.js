 
//for each second getting the time units such as hours seconds and hours with the supported js data and time function
console.log("js linked properly");

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
		const now=new Date();
		const seconds= now.getSeconds();
		const minutes=now.getMinutes();
		const hours=now.getHours();
		const secondsDegrees = (seconds / 60) * 360 + 90;
		const minutesDegrees = (minutes / 60) * 360 + 90;
		const hoursDegrees = (hours / 12) * 360 + 90;
		// console.log(`Seconds degree is ${secondsDegrees}`);
		// console.log(`Minute degree is ${minutesDegrees}`);
		// console.log(`Hours degree is ${hoursDegrees}`);
		secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
		if(seconds === 0) secondHand.classList.add('fast');
			//console.log("added");
		if(seconds === 1) secondHand.classList.remove('fast');
			//console.log("removed");

		minuteHand.style.transform=`rotate(${minutesDegrees}deg)`;
		if(minutes === 0) {
		 	minuteHand.classList.add('fast');
		 	//console.log("added");
		}
		if(minutes === 1) {
		 	minuteHand.classList.remove('fast');
		 	//console.log("removed");
		}

		hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
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