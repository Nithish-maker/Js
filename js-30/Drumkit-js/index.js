//adding event listener for the whole window along with the keydown event listener
// const logValues = (e) => {
// 	console.log(e.keyCode);
//}
const removeTransition = (e) => {
	let isClassPresent = (e.propertyName === 'transform') ? true : false;
	if(isClassPresent) {
		e.target.classList.remove('play');
	}
 }
//looping through each key element and adding a function callback
//getting the whole array of keys using required DOM selection 
const keys = Array.from(document.querySelectorAll('.key'));
keys.map(key => key.addEventListener('transitionend', removeTransition));

const playSound = (e) => {
	//getting the pressed key element respectively
    const reskey = document.querySelector(`div[data-key="${e.keyCode}"]`);
	//getting respective audio element using attribute selection and adding class play and playing the respective audio ele sound
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(audio === null) {
		alert('Press a valid key from [asdfghjkl]');
	}
	//console.log(audio);
	//adding the class play to the specific keyelement being pressed
	reskey.classList.add('play');
	//reinitalising the value of currenttime to 0 inorder to play the audio again when the key is pressed again
	//setting the current value of the audio element as 0
	audio.currentTime = 0;
	audio.play();
}
window.addEventListener('keydown',playSound);