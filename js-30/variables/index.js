//getting the input elements as a list of arrays and manipulatig each input on change event
const inputs = document.querySelectorAll('#inputs input');

function handleUpdate(e) {
	//console.log(e.target.value);
	const das = e.target.dataset.sizing || "";
	//console.log(das.sizing);
	//getting the root element and setting the property
	const root = document.documentElement;
	root.style.setProperty(`--${e.target.name}`,`${e.target.value}` + das);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));