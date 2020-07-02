//функцію, яка займає рядок, перевіряє, чи має вона однакову кількість x і o та повертає trueабо false.
Test.assertEquals(XO("ooxx"), true);
Test.assertEquals(XO("xooxx"), false);
Test.assertEquals(XO("ooxXm"), true);
Test.assertEquals(XO("zpzpzpp"), true);
//kim
function XO(str) {
	return (str.match(/o/gi) || []).length == (str.match(/x/gi) || []).length;
}
//
function XO(str) {
  let x = str.toLowerCase().split('').filter(x => x === 'x').length;
  let o = str.toLowerCase().split('').filter(x => x === 'o').length;
  return x === o;
}
//
function XO(str) {
	return (str.split(/o/i).length == str.split(/x/i).length);
}
//
const XO = str => str.replace(/[^x]/gi,'').length
=== str.replace(/[^o]/gi,'').length;
//





// регулярний вираз, який повернеться, true якщо немає пробілів перед  знакои питання ?
Test.assertEquals(testExp(str1), true, "This string is in the correct format.")
Test.assertEquals(testExp(str2), false, "There is a space before the ending punctuation ?")
Test.assertEquals(testExp(str3), false, "There are spaces before the ending punctuation          ?")
//kim
const REGEXP = /\w\S*?$/g
//
const REGEXP = /(?<=\S)\?$/g
const REGEXP = /\S(?=\?)/g









// Враховуючи цензуровану рядок і рядок цензурованих голосних, поверніть початковий нецензурований рядок.
Test.assertEquals(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'), 'Where did my vowels go?')
Test.assertEquals(uncensor('abcd', ''), 'abcd', 'Works with no vowels.')
Test.assertEquals(uncensor('*PP*RC*S*', 'UEAE'), 'UPPERCASE', 'Works with uppercase')
Test.assertEquals(uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee'), 'Cheese, Grommit -- cheese', 'Works with * at the end')
Test.assertEquals(uncensor('*l*ph*nt', 'Eea'), 'Elephant', 'Works with * at the start')
//kim
function uncensor(str, vowels) {
	let arr = vowels.split('');
	return str.replace(/\*/g, ()=>arr.shift());
}
//
function uncensor(str, vowels) {
	for (let i=0;i<vowels.length; i++){
		str = str.replace('*', vowels[i])
	}
 return str
}
//
function uncensor(str, vowels) {
	var i = -1;
	return str.replace(/\*/g,m=>{i+=1;return vowels[i]})
}
//
