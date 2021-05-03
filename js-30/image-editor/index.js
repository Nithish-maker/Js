const inputs = document.querySelectorAll('#inputs input');

function handleUpdate(e) {
	// console.log(e.target.name);
	const das = e.target.dataset.sizing;
	// //console.log(das.sizing);
	//getting the root element and setting the property
	const root = document.documentElement;
	if(e.target.name === "spacing" || e.target.name === "blur" || e.target.name === "brightness" || e.target.name === "saturate" || e.target.name === "invert") {
		root.style.setProperty(`--${e.target.name}`,`${e.target.value}` + das);
	}
	else {
		root.style.setProperty(`--${e.target.name}`,`${e.target.value}`);
	}
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
