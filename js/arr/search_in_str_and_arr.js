// пошук слів з масиву у рядку
function preventDistractions(str) {
	return /anime|meme|vine|roasts|Danny DeVito/i.test(str) ? 'NO!' : 'Safe watching!';
}

///
function preventDistractions(str) {
	let arr = ["anime", "meme", "vine", "roasts", "Danny DeVito"];
	return arr.some(x => str.includes(x)) ? "NO!" : "Safe watching!";
}
