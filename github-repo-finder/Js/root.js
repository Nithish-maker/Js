 /** 
 1.Getting the respective the input value
 2.Passing the value to the endpoint via template literals
 3.ADD event listener for the Get link and get repo button
 4.Get repos should return all the repos of the given user
 5.Get links should return all the links of the requested user's repos
 6.Use required higher order functions 
 **/
const userInput = document.getElementById('input');
const repoBtn = document.getElementById('get-repo');
const linkBtn = document.getElementById('get-link');
let userValue;
let links = [];
const logInput = (e) => {
	userValue = e.target.value.toLowerCase();
}

const displayRepo = () => {
	if(userInput.value === "") {
		alert("Please first enter the user name");
	}
	fetch(`https://api.github.com/users/${userValue}/repos`)
	.then(res => {
		if(res.status !== 200) {
			alert(`There was an error in retrieving the user ${userValue} repos`);
		}
		return res.json();
	})
	.then(data => {
		links.push(...data);
		let ulLi = '<ol class="list-group list-group-numbered"></ol>'
		data.map((repo,index) => {
			ulLi+=`
			<li class="list-group-item d-flex justify-content-between align-items-start p-3">
				<div class="ms-2 me-auto">
      				<div class="fw-bold mb-2">${repo.name.toUpperCase()}</div>
      				Repo ${index + 1}
    			</div>
    			<span class="icon"><i class="fa fa-sort-numeric-asc fa-sm"></i></span>
			</li>
			`
		})

	document.getElementById('list').innerHTML = ulLi;
	})
}

const displayLink = () => {
	if(userInput.value === "") {
		alert("Please first search for the user");
	}
	let ul = '<ol class="list-group list-group-numbered"></ol>'
	links.map((link,index) => {
		ul = ul + 
		`
		<li class="list-group-item d-flex justify-content-between align-items-start p-3">
				<div class="ms-2 me-auto">
      				<div class="fw-bold mb-2">${link.html_url}</div>
      				Repo ${index + 1}
    			</div>
    			<span class="icon"><a href="${link.html_url}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Get Link"><i class="fa fa-link fa-sm"></i></a></span>
			</li>
		`
	})
	document.getElementById('list').innerHTML = ul;
	userInput.value = "";
}
userInput.addEventListener('input', logInput);
repoBtn.addEventListener('click', displayRepo);
linkBtn.addEventListener('click', displayLink);
