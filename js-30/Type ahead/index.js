 
console.log("JS RENDERED SUCCESFULLY");

const searchInput = document.querySelector('.search-input');

const suggestions = document.querySelector('.suggestions');

let cities = [];

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(res => res.json())
.then(data => cities.push(...data));

const filterCities = (word,arr) => {
	return arr.filter(place => {
		let regex = new RegExp(word,'gi');
		return place.city.match(regex) || place.state.match(regex);
	})
}

const displayCities = (e) => {	
	const matchedArr = filterCities(e.target.value,cities);
	const dom = matchedArr.map(place => {
		let regex = new RegExp(e.target.value,'gi');
		const cityname = place.city.replace(regex,`<span class="hl">${e.target.value}</span>`);
		const statename = place.state.replace(regex,`<span class="hl">${e.target.value}</span>`);
		return `
		<li>
			<span class="hl">${cityname}, ${statename}</span>
		</li>
		`
	}).join('');
	suggestions.innerHTML = dom;
}

//searchInput.addEventListener('change',displayCities);
searchInput.addEventListener('keyup',displayCities);
