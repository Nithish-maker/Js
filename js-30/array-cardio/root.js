 const inventors = [
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    ];
const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

// 1. Filter the list of inventors for those who were born in the 1500's
// with higher order functions 

const filtered = inventors.filter(inventor => 1499 < inventor.year && 1600 > inventor.year);
console.table(filtered);
 
// Without higher order function

function filtering(arr) {
	let newArr = [];
	for(let i of arr) {
		if(1499 < i['year'] && 1600 > i['year']) {
			newArr.push(i);
		}
	}
	return newArr;
}
console.table(filtering(inventors));

// 2. Give us an array of the inventor first and last names

// With higher order function

const arrOfNames = inventors.map(name => (name.first + " " + name.last));
console.table(arrOfNames); 

// Without higher order function 

const arrNames = (arr) => {
	let resArr = [];
	for(let it = 0; it < arr.length; it++) {
		let resName = arr[it]['first'] + " " + arr[it]['last'];
		resArr.push(resName);
	}
	return resArr;
}
console.log(arrNames(inventors));

// 3. Sort the inventors by birthdate, oldest to youngest

/** Note : 
	
	1. Normal arrays will be sorted based on the chronological order
	2. Arrays with numbers will get sorted in such a way that in gets converted to a string and then performs sorting with the above method
	3. Arrays of objects with default sort method does'nt work at all. Hence a custom comparator function is used to make sort the arrays of obj based on some property values

**/


console.table(inventors);

const sortedArr = inventors.sort((firstIt,nextIt) => (firstIt.year - nextIt.year));
console.table(sortedArr);

// 4. How many years did all the inventors live?

// With higher order function 

const livedYears = inventors.reduce((total,inventor) => {
	return total + (inventor.passed - inventor.year);
},0)
// console.log(livedYears);

// //Without higher order function

const getLivedYears = (arr) => {
	let total = 0; 
	for(let it of arr) {
		total+=it['passed'] - it['year'];
	}
	return total;
}
console.log(getLivedYears(inventors));

// 5. Sort the inventors by years lived

const liveSort = inventors.sort((firstPerson,nextPerson) => (firstPerson.passed - firstPerson.year) - (nextPerson.passed - nextPerson.year));
console.table(liveSort);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const container = document.querySelector('.mw-category');
// const links = Array.from(container.querySelectorAll('a'));
// const res = links.map(link => link.title);
// const fRes = res.filter(item => item.includes('de'));
// console.log(fRes);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const res = data.reduce(function(obj,item) {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item] = obj[item] + 1;
    return obj;
   },{});
console.table(res);