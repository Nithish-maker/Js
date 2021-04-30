/**
1.Getting up the video element and triggering the video to play and pause on a user click
2.Updating the play and pause icons with required event listener play and pause
3.Calculate the percentage value of current time of the video and update the progress bar accordingly
4.Updating the volume and framerate of the video element through the video's volume and speed prpoerty
5.Updating the speed of the video element w.r.t video's currentTime and value property
6.Changing the progress bar along with the video's duration part to the place of the user's mouse pointer
7.Requesting for the fullscreen mode and exiting from it
**/ 

// console.log("Js rendered successfully");

const playerBox = document.querySelector('.player');
const video = document.querySelector('.player__video');
const playerButton = document.querySelector('.toggle');
const parentProgress = document.querySelector('.progress');
const currentProgress = document.querySelector('.progress__filled');
const sliderInputs = Array.from(document.querySelectorAll('.player__slider'));
const skipButtons = Array.from(document.querySelectorAll('[data-skip'));
const fullScreen = document.querySelector('.fullscreen');

function playVideo()
 {
 	// console.log(video);
 	return video.paused ? video.play() : video.pause();
 }

function changeButton() {
 	// console.log("video playing");
 	if(!video.paused) {
 		return playerButton.textContent = "❚ ❚";
 	}
 	return playerButton.textContent = "►";
}

function indecProgress() {
	// console.log(video.currentTime);
	const progressPercent = (video.currentTime / video.duration) * 100;
	return currentProgress.style.flexBasis = `${progressPercent}%`;
}

function updateFrameRateAndVolume(e) {
	if(e.target.name === "volume") {
		video.volume = e.target.value;
	}
	else {
		video.playbackRate = e.target.value;
	}
}

function updateSpeed() {
	const value = this.dataset.skip;
	return video.currentTime+= parseFloat(float);
}

function scrub(e) {
	const srubTime = (e.offsetX / parentProgress.offsetWidth) * video.duration; 
	video.currentTime = srubTime;
}

function updateFullScreen() {
	if(video.fullscreenchange) {
		video.exitFullscreen();
	}
	else {
		video.requestFullscreen();
	}
}

playerBox.addEventListener('click',playVideo);
video.addEventListener('play',changeButton);
video.addEventListener('pause',changeButton);
video.addEventListener('timeupdate',indecProgress);
sliderInputs.map(slider => slider.addEventListener('change',updateFrameRateAndVolume));
skipButtons.map(button => button.addEventListener('click',updateSpeed));
parentProgress.addEventListener('click',scrub);
fullScreen.addEventListener('click',updateFullScreen);