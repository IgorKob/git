//      /^[^C]/.     фільтрує всі слова де на початку є велика буква С
//      /[^C]/.      фільтрує всі слова де є велика буква С
function acceptedWords(arr) {
	return arr.filter(el=>el=/^[^C]/.test(el));
}



//Використовуючи .test() метод у своїй функції, поверніть, чи містить рядок символи
 //"a" та "c" (у такому порядку) з будь-якою кількістю символів (включаючи нуль)
 //між ними.
asterisk("account") ➞ true
asterisk("abccount") ➞ true
asterisk("abbbccount") ➞ true
asterisk("bbbccount") ➞ false
function asterisk(string) {
	return /a.*c/.test(string)
}
//
function asterisk(string) {
	return /ab*c/.test(string)
}
