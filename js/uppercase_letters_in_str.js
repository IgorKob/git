// Порахуйте великі літери

function capitalLetters(str) {
	let reg = /[A-Z]/g;
	let x  = str.match(reg);
		return x == null ? 0: x.length;
}

capitalLetters("fvLzpxmgXSDrobbgMVrc");// ➞ 6
capitalLetters("JMZWCneOTFLWYwBWxyFw");// ➞ 14
capitalLetters("mqeytbbjwqemcdrdsyvq");// ➞ 0


// ////
// const capitalLetters = txt => txt.split(/[A-Z]/).length - 1;
//
// ////
// const capitalLetters = s => {
// 	return [...s].filter(v => v === v.toUpperCase()).length;
// }
//
// ////
// function capitalLetters(txt) {
// 	return txt.replace(/[a-z]/g, '').length;
// }
