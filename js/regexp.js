//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
//////////////////////
//\ d - те саме, що [0-9],
//\ w - те саме, що [a-zA-Z0-9_],
//\ s - те саме [\t\n\v\f\r ], що і декілька інших рідкісних символів пробілу Unicode.

// \d - Відповідає будь-якій цифрі (арабською цифрою). Еквівалентно [0-9]. Наприклад, / \ d / або / [0-9] / відповідає "2" у "B2 - номер набору".
// \D - Відповідає будь-якому символу, який не є цифрою (арабською цифрою). Еквівалентно [^ 0-9]. Наприклад, / \ D / або / [^ 0-9] / відповідає "B" у "B2 - номер набору".
// \w - Відповідає будь-якому буквено-цифровому символу з основного латинського алфавіту, включаючи підкреслення. Еквівалентно [A-Za-z0-9_]. Наприклад, / \ w / відповідає "a" в "apple", "5" у "$ 5.28" та "3" у "3D".
// \W - Відповідає будь-якому символу, який не є символом слова, з основного латинського алфавіту. Еквівалентно [^ A-Za-z0-9_]. Наприклад, / \ W / або / [^ A-Za-z0-9 _] / відповідає "%" в "50%".
// \s - Збігає один пробіл із пробілом, включаючи пробіл, вкладку, канал форми, канал рядків та інші пробіли Unicode. Еквівалентно [\ f \ n \ r \ t \ v \ u00a0 \ u1680 \ u2000- \ u200a \ u2028 \ u2029 \ u202f \ u205f \ u3000 \ ufeff]. Наприклад, / \ s \ w * / відповідає "bar" у "foo bar".
// \S - Відповідає одному символу, відмінному від пробілу. Еквівалентно [^ \ f \ n \ r \ t \ v \ u00a0 \ u1680 \ u2000- \ u200a \ u2028 \ u2029 \ u202f \ u205f \ u3000 \ ufeff]. Наприклад, / \ S \ w * / відповідає "foo" в "foo bar".
// \t - Відповідає горизонтальній вкладці. Відповідає поверненню каретки.
// \n - Збігає лінійку прямих передач.
// \v - Відповідає вертикальній вкладці.
// \f - Відповідає подачі форми.
// [\b] - Збігає зворотній простір. Якщо ви шукаєте символу граничного слова (\ b), див. Межі.
// \0 - Відповідає символу NUL. Не слідкуйте за цим іншою цифрою.
// ^ - Відповідає початку введення.
// $ - Відповідає в кінці введення.
// /\bm/ - відповідає "m" у "moon". / oo \ b / не відповідає "oo" у "місяці", оскільки "oo" супроводжується "n", що є символом слова. / oon \ b / відповідає "oon" у "moon", оскільки "oon" - це кінець рядка, тому не слідує символ слова.
// /\w\b\w/ -  ніколи нічого не відповідатиме, тому що за символом слова ніколи не може супроводжуватися як слово, так і слово.
// \B - Відповідає межі без слів. Це положення, коли попередній і наступний символи мають один і той же тип: або обидва повинні бути словами, або обидва повинні бути не словами, наприклад між двома літерами або між двома пробілами. Початок і кінець рядка вважаються несловами. Подібно до межі відповідного слова, відповідна межа без слів також не включається в збіг. Наприклад, / \ Bon / match "on" in "опівдні", і / ye \ B / match "ye" в „можливо вчора".
// x(?=y) - Заява Lookahead: відповідає "x", лише якщо "x" супроводжується "y". Наприклад, / Jack (? = Sprat) / відповідає "Jack", лише якщо за ним слідує "Sprat".
// /Jack(?=Sprat|Frost)/ - відповідає "Jack", лише якщо за ним слід "Sprat" або "Frost". Однак ні "Спрат", ні "Мороз" не є частиною результатів матчу.
// х(?!у) - Негативне твердження пошуку: відповідає "x", лише якщо "x" не супроводжується "y". Наприклад, /\d+(?!\.)/ відповідає номеру лише в тому випадку, якщо за ним не стоїть десяткова крапка. /\d+(?!\.)/.exec('3.141 ') відповідає "141", але не "3.
// (?<=y)x - Попередження твердження: відповідає "x", тільки якщо "x" передує "y". Наприклад, / (? <= Jack) Спрат / відповідає "Спрат", лише якщо йому передує "Джек". / (? <= Jack | Tom) Спрат / відповідає "Спрат", лише якщо йому передує "Джек" або "Том". Однак ні "Джек", ні "Том" не є частиною результатів матчу.
// (?<!y)х - Негативний погляд за твердженням: відповідає "x", лише якщо "x" не передує "y". Наприклад, / (? <! -) \ d + / відповідає номеру, лише якщо йому не передує знак мінус. /(?<!-)\d+/.exec('3 ') відповідає "3". /(?<!-)\d+/.exec('-3 ') збіг не знайдено, оскільки число передує знаку мінус.



//[][] - обозначает любой из символов “]” или «[»,([Хх][аоие]х[аоие], то каждая из строк “Хаха”, “хехе”, “хихи” и даже “Хохо” будут соответствовать шаблону.)
//[[]х] – исключительно последовательность “[х]”
//\b - обозначает границу слова,
//\B — не границу слова,
//\bJava\b в строке “Java and JavaScript” найдутся первые 4 символа,
//\bJava\B — символы c 10-го по 13-й (в составе слова “JavaScript”).
//?	- {0,1}	Ноль или одно вхождение
//*	- {0,}	Ноль или более
//+	- {1,}	Одно или более
//(\w)\1\2  - соответствуют строки “aaaa”, “abab”, но не соответствует “aabb”.
//Если выражение берётся в скобки только для применения к ней квантификатора (не планируется запоминать результат поиска по этой группе), то сразу после первой скобки стоит добавить ?:, например (?:[abcd]+\w).


// (x) - відповідає x і запам'ятовує матч.
var regex = /(foo)bar\1/;
console.log(regex.test('foobarfoo'));  // true
console.log(regex.test('foobar'));    // false
// \1 - запам'ятовує та використовує цю відповідність від першого піддепресії в дужках.
// (?: x) - відповідає x і не запам'ятовує збіг.  Тут \1не вийде, це буде відповідати буквальному \1.
var regex = /(?:foo)bar\1/;
console.log(regex.test('foobarfoo'));  // false
console.log(regex.test('foobar'));     // false
console.log(regex.test('foobar\1'));   // true
// x (? = y) - відповідає x лише тоді, коли за x дорівнює y.
var regex = /Red(?=Apple)/;
console.log(regex.test('RedApple'));   // true
// У наведеному вище прикладі збіг відбуватиметься лише в тому випадку, якщо Red за ним слідкує Apple.



// Регулярний вираз має відповідати (поштовий індекс США) 12345 і 12345-6789, але не 1234, 123456, 123456789 або 1234-56789.
/^[0-9]{5}(?:-[0-9]{4})?$/



//шукає будь-які символи, крім букв, цифр та пробілів:
alert( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) ); // @ and .
//kim
const REGEXP = /[^0-9\sA-Za-z]/gi


//Непарні числа
let x = /^\d*[13579]$/
//Парні числа
let x = /^\d*[24680]$/



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





//шукаємо розштрення файла в кінці .js || .jsx
//\. - для того щоб шукати з крапкою
// js - відповідає js, чутливо до регістру
// х? - відповідає символу x буквально (з урахуванням регістру)
// ?  Квантор - Матчі між нулем і один раз, (x{0,1})
// $  затверджує позицію в кінці рядка
function isJS(path) {
	return /\.jsx?$/.test(path)
}
//
const isJS = path => /(\.js|\.jsx)$/.test(path);







//kim
function isPrefix(word, prefix) {
	return RegExp('^'+prefix.replace('-', ''), 'gi').test(word);
}
function isSuffix(word, suffix) {
	return RegExp(suffix.replace('-', '')+'$', 'gi').test(word);
}
//
function isPrefix(word, prefix) {
	var reg = new RegExp('^'+prefix.replace('-',''));
	return reg.test(word)
}
function isSuffix(word, suffix) {
	var reg = new RegExp(suffix.replace('-','')+'$');
	return reg.test(word)
}
//
function isPrefix(word, prefix) {
	return word.startsWith(prefix.replace("-", ""));
}
function isSuffix(word, suffix) {
	return word.endsWith(suffix.replace("-", ""));
}
//
let isPrefix = (w, p) => w.startsWith(p.slice(0, -1));
let isSuffix = (w, s) => w.endsWith(s.slice(1));
//
Test.assertEquals(isPrefix("automation", "auto-"), true)
Test.assertEquals(isPrefix("superfluous", "super-"), true)
Test.assertEquals(isPrefix("oration", "mega-"), false)
Test.assertEquals(isPrefix("retrospect", "sub-"), false)
Test.assertEquals(isSuffix("arachnophobia", "-phobia"), true)
Test.assertEquals(isSuffix("rhinoplasty", "-plasty"), true)
Test.assertEquals(isSuffix("movement", "-scope"), false)
Test.assertEquals(isSuffix("vocation", "-logy"), false)








//kim шукає перший індекс голосної букви
function firstVowel(str) {
	let r = new RegExp('[aeoiu]', 'i');
	return str.search(r);
}




//
//відповідає рядку, тільки якщо він є дійсним поштовим індексом
//Поштові індекси повинні бути точно 5-ти розрядними і містити лише цифри.
"32554" ➞ true
"92 342" ➞ false
// Invalid: contains a whitespace
"9@342" ➞ false
// Invalid: contains a non-numeric character
"923444" ➞ false
// Invalid: length is not 5
//kim
let x = /^\d{5}$/
//kim
function isValid(zip) {
	return /^\d{5}(?:[-\s]\d{4})?$/.test(zip);
}
//
let x = /^\d{5}(?:[-\s]\d{4})?$/





//
function myFunction() {
  var str = "12121212";
  var patt1 = /[1]/g;
  var result = str.match(patt1);
  document.getElementById("demo").innerHTML = result; //  1,1,1,1
}






//функцію, яка повертає кількість десяткових знаків, яке має число (задане у вигляді рядка).
//рахуємо кількість цифр після коми
Test.assertEquals(getDecimalPlaces("3.22"), 2)
Test.assertEquals(getDecimalPlaces("400"), 0)
Test.assertEquals(getDecimalPlaces("43.50"), 2)
Test.assertEquals(getDecimalPlaces("100,000,000"), 0)
Test.assertEquals(getDecimalPlaces("3.1415"), 4)
Test.assertEquals(getDecimalPlaces("0"), 0)
Test.assertEquals(getDecimalPlaces("01"), 0)
Test.assertEquals(getDecimalPlaces("00010.00010"), 5)
Test.assertEquals(getDecimalPlaces("3,141.592"), 3)
//kim
function getDecimalPlaces(num) {
  let x =	num.match(/\.\d+/g);
	if (x) {
		return x.join('').length-1;
	}
	return 0;
}
//kim
function getDecimalPlaces(num) {
  let x =	num.match(/\.\d+/g);
	return x ? x.join('').length-1 : 0;
}
//
function getDecimalPlaces(num) {
	return num.includes(".") ? num.split(".")[1].length : 0;
}
//
function getDecimalPlaces(num) {
	return num.slice(num.indexOf(".")).length - 1;
}
//
function getDecimalPlaces(num) {
	let [integer,decimals] =  num.split(".");
	return decimals ? decimals.length : 0;
}







//для тестування порожнього рядка.
"".length === 0 ➞ true
//kim
const REGEXP = /^$/




//Напишіть функцію, яка приймає номер кредитної картки і відображає лише
//останні чотири символи. Решту номера картки необхідно замінити на ************
Test.assertEquals(cardHide("1234123456785678"), "************5678")
Test.assertEquals(cardHide("8754456321113213"), "************3213")
Test.assertEquals(cardHide("35123413355523"), "**********5523")
//kim
function cardHide(card) {
	return card.slice(0,-4).replace(/\d/g, '*')+card.slice(-4);
}
