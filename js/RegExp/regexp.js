//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// https://regexlib.com/(X(1)A(a-T8ItcQ2fEhDfoLFsZqQQBSkMJpO3tuehH2VS5vCqO4fhsc0KEUhCx8eqUhs8qvJNU53exrxreFBoUbVdTqWBdl8-TXF_9izq5ZyJoyKvCvv_xj4OU59Gxp2HARaagKgYTNqZIZL7WL5WdfYwxCxDGKk9zp0Izq31XHFQfuqVxflids9IQAHIHLq_WGuNQW0))/CheatSheet.aspx?AspxAutoDetectCookieSupport=1
// https://flaviocopes.com/javascript-regular-expressions/



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


//                flag
// g -	Глобальний пошук.	RegExp.prototype.global
// i -	Пошуковий нечутливий пошук.	RegExp.prototype.ignoreCase
// m -	Багаторядковий пошук.	RegExp.prototype.multiline
// s -	Дозволяє .відповідати символам нового рядка. (Додано в ES2018, ще не підтримується у Firefox).	RegExp.prototype.dotAll
// u -	"unicode"; трактувати шаблон як послідовність точок коду унікоду.	RegExp.prototype.unicode
// y -	Виконайте "липкий" пошук, який відповідає, починаючи з поточного положення в цільовому рядку. Див  sticky.	RegExp.prototype.sticky





// exec()	Виконує пошук збігу в рядку. Він повертає масив інформації або nullпро невідповідність.
// test()	Тести на відповідність в рядку. Він повертається trueабо false.
// match()	Повертає масив, що містить усі збіги, включаючи групи захоплення, або nullякщо збіг не знайдено.
// matchAll()	Повертає ітератор, що містить усі збіги, включаючи групи захоплення.
// search()	Тести на відповідність в рядку. Він повертає індекс збігу, або -1якщо пошук не вдається.
// replace()	Виконує пошук збігу в рядку та замінює відповідна підрядка заміною підрядкою.
// replaceAll()	Виконує пошук усіх збігів у рядку та замінює відповідні підрядки заміною підрядкою.
// split()	Використовує регулярний вираз або фіксовану рядок для розбиття рядка на масив підрядів.


<input type="text" pattern=".{5,}">Nane
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$">Email
<input type="text" pattern="([0-9]|\s){2,}">Phone
<span data-validation-text>Must be 5 chars or more</span>
//css
// When the input is invalid & not blank
input:invalid:not(:placeholder-shown) {
	border: 2px solid red !important;
}
// When input is invalid, show and make the adjacanet validation text red 
input:invalid:not(:placeholder-shown) + [data-validation-text] {
	color: red !important;
	display: block;
}
// Hide validation text by default
[data-validation-text] {
	display: none;
}


{/* Заперечення шаблону */}
{/* ^Характер на початку візерунка якорів його до початку рядка. */}
{/* Використовуючи всередині діапазону, він заперечує його, тому: */}
/[^A-Za-z0-9]/.test('a') //❌
/[^A-Za-z0-9]/.test('1') //❌
/[^A-Za-z0-9]/.test('A') //❌
/[^A-Za-z0-9]/.test('@') //✅

{/* Якщо ви хочете здійснити пошук по тому чи іншому рядку */}
/hey|ho/.test('hey') //✅
/hey|ho/.test('ho')  //✅

{/* Скажімо, у вас є цей регулярний вираз, який перевіряє, чи є в рядку одна цифра, і нічого іншого: */}
/^\d$/
{/* Ви можете використовувати в ?квантор , щоб зробити його обов'язковим, що вимагає нуль або один: */}
/^\d?$/

{/* ?= or ?<= для збігу рядка, за яким слідує певний підрядок: */}
/Roger(?= Waters)/.test('Roger is my dog') //false
/Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') //true
{/* ?! or ?<! виконує обернену операцію, збігаючись, якщо за рядком не слідує певний підрядок: */}
/Roger(?! Waters)/.test('Roger is my dog') //true
/Roger(?! Waters)/.test('Roger Waters is a famous musician') //false



</input>
var re = /\w+\s/g;
// або
var re = new RegExp('\\w+\\s', 'g');


// /\d+(?!\.)/ відповідає номеру лише в тому випадку, якщо за ним не стоїть
// десяткова крапка.
/\d+(?!\.)/.exec('3.141 '); // відповідає "141", але не "3.


/(?<!-)\d+/      //відповідає номеру, лише якщо йому не передує знак мінус.
/(?<!-)\d+/.exec('3 ') //відповідає "3".
/(?<!-)\d+/.exec('-3 ') //збіг не знайдено, оскільки число передує знаку мінус.



//re = /\w+\s/gстворює регулярний вираз, який шукає одного або декількох символів, за якими пробіл, і він шукає цю комбінацію у всьому рядку.
var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);
// ["fee ", "fi ", "fo "]



const text = 'A quick fox';
const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]
const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]
const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// expected output: Array ["quick"]




var xArray; while(xArray = re.exec(str)) console.log(xArray);
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
// m - Прапор використовується для вказівки того, що багатостроковий вхідного рядка
// слід розглядати як кілька рядків. Якщо mпрапор використовується, ^і $збігається
// на початку або в кінці будь-якого рядка вхідного рядка замість початку або в
// кінці всього рядка.




// икористання спеціальних символів для перевірки введення номер телефону
var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  if (!OK) {
    console.error(phoneInput.value + ' isn\'t a phone number with area code!');
  } else {
    console.log('Thanks, your phone number is ' + OK[0]);}
}





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




var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);  //myRe.index;
// "The value of lastIndex is 5"

/^\d{2}\/\d{2}\/\d{4}$/  перевіряє формат дати, наявність 2 цифри / 2 цифри / 4 цифри .

// Регулярний вираз має відповідати (поштовий індекс США) 12345 і 12345-6789, але не 1234, 123456, 123456789 або 1234-56789.
/^[0-9]{5}(?:-[0-9]{4})?$/
or
// На початку 1 або 2 алфавітні символи, за якими слідують 1 або 2 цифри, потім пробіл і одна цифра, і точно два алфавітні символи.
/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

// веб-сайт / сторінка 
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/


// Якщо хочете дозволити лише буквено-цифрові символи
/^[a-zA-Z0-9]*$/

// Для десяткових чисел з однією десятковою комою
/^[0-9]+\.?[0-9]*$/

// підтверджує номер телефону
function validate()
{
  var phoneNumber = document.getElementById('phone-number').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);
  alert("phone:"+phoneResult );
}


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










buggyMultiline = `tey, ihe light-greon apple tangs on ihe greon traa`;
// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline); // fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.
// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline); // fix  'traa' => 'tree'.
// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // fix  'ihe' but does not touch 'light'.
// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // fix  'greon' but does not touch 'on'.




const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(aliceExcerpt.match(regexpWithoutE));
// expected output: Array ["and", "at"]
const imageDescription = 'This image has a resolution of 1440×900 pixels.';
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// expected output: "Width: 1440 / Height: 900."





var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;
console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25





// Використання груп
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;
let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while((match = regexpNames.exec(personList)) !== null);

// Використання названих груп
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;
let regexpNames =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
} while((match = regexpNames.exec(personList)) !== null);






const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43                   індекс пошуку
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."                  індекс показує елемент




// Наступний скрипт перемикає слова в рядку. Для заміщає тексту, скрипт
// використовує захоплення груп і $1та $2заміни моделей.
let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John





const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '
const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)
console.log(nameList)
//[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]




// Створіть функцію, яка зберігає лише рядки з повторюваними однаковими символами
// (іншими словами, вона має встановлений розмір 1).
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
➞ ["aaaaaa", "d", "eeee"]
identicalFilter(["88", "999", "22", "545", "133"])
➞ ["88", "999", "22"]
identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
➞ []
//kim
function identicalFilter(arr) {
	return arr.filter(el=>/^(.)\1*$/g.test(el));
}
//
function identicalFilter(arr){
    return arr.filter((str) => new Set(str).size === 1)
}
//





// Створіть функцію, яка повертає слово в рядку, але з усіма fog видаленими літерами.
// Однак якщо рядок очищається від туману, поверніться "It's a clear day!".
//kim
function clearFog(str) {
	return /[fog]/.test(str) ? str.replace(/[fog]/gi, '') : "It's a clear day!";
}
//
function clearFog(str) {
	return (/[fog]/gi).test(str) ? str.match(/[^fog]/gi).join("") :"It's a clear day!";
}








// Створіть функцію , яка приймає рядок і цензорів слово більше чотирьох символів з *.
censor("The code is fourty") ➞ "The code is ******"
censor("Two plus three is five") ➞ "Two plus ***** is five"
censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
//kim
function censor(str) {
  return	str.split(' ').map((el)=>{
		if (el.length>4) { return el = "*".repeat(el.length); }
		return el;
	}).join(' ');
}
//
const censor = str => str.replace(/\w{5,}/g, v => '*'.repeat(v.length));
//










// Створіть функцію, яка повертається, trueякщо зірочка *знаходиться у вікні.
inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true
inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false
inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ false
//kim error
function inBox(arr) {
	return /\*(?=\s*#)/g.test(arr);
}
//
const inBox = arr => arr.some(str => str.includes('*'));
//






//Знайдіть, скільки вкладок з одним буквальним пробілом, що знаходиться безпосередньо після вкладки, є рядком.
//kim
const REGEXP = /\t /g
//error
const REGEXP = /(?<=\t)\s/g
