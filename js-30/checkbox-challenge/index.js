 
console.log("JS RENDERED SUCCESSFULLY");

//getting the checkbox elements as a nodelist 

const checkboxes = document.querySelectorAll(".item input");
let checkedWithoutKey;
function log(e) {
	let flag = false;
	if(e.shiftKey && e.target.checked) {
		checkboxes.forEach(checkbox => {
			if(this === checkbox || checkbox === checkedWithoutKey) {
				flag = !flag;
			}
			if(flag) {
				checkbox.checked = true;
			}
		})
	}
	checkedWithoutKey = this;
}
		


checkboxes.forEach(checkbox => checkbox.addEventListener('click',log));