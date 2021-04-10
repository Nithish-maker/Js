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
let userValue;
const logInput = (e) => {
	userValue = e.target.value.toLowerCase();
}

const printRepo = () => {
	fetch(`https://api.github.com/users/${userValue}/repos`)
	.then(res => {
		if(res.status !== 200) {
			alert(`There was an error in retrieving the user ${userValue} repos`);
		}
		return res.json();
	})
	.then(data => {
		let ulLi = '<ol class="list-group list-group-numbered"></ol>'
		data.map((repo,index) => {
			ulLi+=`
			<li class="list-group-item d-flex justify-content-between align-items-start p-3">
				<div class="ms-2 me-auto">
      				<div class="fw-bold mb-2">${repo.name.toUpperCase()}</div>
      					<a class="list-unstyled" href="${repo.html_url}">${repo.html_url}</a>
    			</div>
    			<span class="icon"><i class="fa fa-check fa-sm"></i></span>
			</li>
			`
		})

	document.getElementById('list').innerHTML = ulLi;
	})
}
userInput.addEventListener('input',logInput);
repoBtn.addEventListener('click',printRepo);