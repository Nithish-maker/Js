// console.log("JS rendered successfully");
const btn = document.getElementsByClassName('getHours');
const list = Array.from(document.querySelectorAll('.videos li'));
const displayCount = () => {
	let duration = 0;
	const seconds = list.map(li => li.dataset.time)
	.map(time => {
		const [min,sec] = time.split(':').map(parseFloat);
		return (min * 60 + sec);
	})
	.reduce((total,sec) => duration = total + sec);

	const hours = Math.floor((duration / 3600));
	let secLeft = duration % 3600;
	// console.log(hours);
	const remMin = Math.floor(secLeft / 60);
	secLeft = duration % 60;
	// console.log(remMin);

	// console.log(hours,remMin,secLeft);
	btn[0].textContent = `${hours}hrs ${remMin}min ${secLeft}sec`;
}
btn[0].addEventListener('click',displayCount);