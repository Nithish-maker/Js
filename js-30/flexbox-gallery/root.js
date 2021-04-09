 const getPanel = document.querySelectorAll('.panel');

const flexGrow = (e) => {
	let arr = Array.from(e.target.classList);
	if(arr.some(item => item === 'panel')) {
		e.target.classList.add('panel-grow');	
	}
}
const textTransition = (e) => {
	// console.log(e.propertyName);
	if (e.propertyName.includes('transform')) {
        e.classList.add('text-shift');
      }
}
getPanel.forEach(panel => panel.addEventListener('click',flexGrow));
getPanel.forEach(panel => panel.addEventListener('transitioned',textTransition));