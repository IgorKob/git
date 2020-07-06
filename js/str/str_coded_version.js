// функцію, яка приймає рядок як аргумент і повертає закодовану (h4ck3r 5p34k) версію рядка.
hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
//kim
function hackerSpeak(str) {
	let obj = {
		a: 4,
		e: 3,
		i: 1,
		o: '0',
		s: 5,
	};
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]]) {
		str =	str.replace(str[i], obj[str[i]]);
		}
	}
	return str;
}
//
function hackerSpeak(str) {
  var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
  str = str.replace(/[aeios]/g, letter => chars[letter]);
  return str;
}
//
function hackerSpeak(str) {
return str.replace(/a/gi,"4").replace(/e/gi,"3").replace(/i/gi,"1").replace(/o/gi,"0").replace(/s/gi,"5")
}
//
