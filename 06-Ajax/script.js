const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesArray = [];

// const promise = fetch(endpoint)
// console.log("file: script.js ~ line 6 ~ promise", promise)


fetch(endpoint)
	// .then(response => console.log(response)) // prototype find json methode
	.then(response => response.json())
	// .then(data => console.log(data))
	.then(data => citiesArray.push(...data)) // instead of push(data) which create an array in an array
	
// returning all the index/city imfo info form the string to match
function findMatches(wordToMatch, citiesArray) {
	return citiesArray.filter(cityInfo => {
		// display cities that match wordToMatch
		const regX = new RegExp(wordToMatch, 'gi')
		return cityInfo.city.match(regX) || cityInfo.state.match(regX)
	})
}



function displayMatches() {
	// console.log(this.value); // return the typed in search input value
	const matchResults = findMatches(this.value, citiesArray)
    console.log("file: script.js ~ line 29 ~ displayMatches ~ matchResults", matchResults)
	// let smap int matchResults to append new innerHTML into the .suugestion div
	const newHtml = matchResults.map( placeInfo => {
		// to color the regex match , we replace the regEx match with the same content carring the class to colorise the backgroung of the letters that match
		const lettersInListMatchingLettersWroteInInput = new RegExp(this.value, 'gi');
        // console.log("file: script.js ~ line 34 ~ displayMatches ~ lettersWroteInInput", lettersWroteInInput)
		// 
		const cityName = placeInfo.city.replace(lettersInListMatchingLettersWroteInInput, `<span class="hl">${this.value}</span>`)
		const stateName =  placeInfo.state.replace(lettersInListMatchingLettersWroteInInput, `<span class="hl">${this.value}</spam>`)

		return `
			<li>
				<!-- <span class="name" >${placeInfo.city}, ${placeInfo.state}</span> -->
				<span class="name" >${cityName}, ${stateName}</span>
				<span class="population">${placeInfo.population}</span>
			</li>
		`
	}).join(''); // .join() transform the map Array with the two data city and state into a string
    console.log("file: script.js ~ line 39 ~ displayMatches ~ newHtml", typeof newHtml)
	suggestions.innerHTML = newHtml;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
console.log("file: script.js ~ line 44 ~ suggestions", suggestions)


searchInput.addEventListener('keyup', displayMatches)