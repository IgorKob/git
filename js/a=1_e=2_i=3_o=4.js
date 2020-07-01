// функцію, яка займає рядок і замінює голосні на інший символ.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
Test.assertEquals(replaceVowel("karachi"), "k1r1ch3")
Test.assertEquals(replaceVowel("aen"), "12n")
Test.assertEquals(replaceVowel("thamel"), "th1m2l")
//kim
function replaceVowel(word) {
	return (word.replace(/a/g, 1)
					    .replace(/e/g, 2)
					    .replace(/i/g, 3)
					    .replace(/o/g, 4)
				      .replace(/u/g, 5));
}
//
function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}
//
function replaceVowel(word){
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  	return [...word].map(i => i in vowels ? vowels[i] : i).join('');
}
//
