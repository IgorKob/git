onblur="myFunction()"           коли курсор покидає елемент
onchange="myFunction()"            коли курсор покидає елемент
onselect="myFunction()"          коли виділяється текст спрацьовує
onmousemove="myFunction(event)"   коли мишка перемішається
onmouseout="clearCoor()"           коли мишка залишає елемент
ondblclick="myFunction()"           подійний кпік


//
setTimeout(function myff() {...}, 1000);
//
let id = setInterval(myff, 10);
function myff() {
  if (pos == 350) { clearInterval(id); }
  ...
}


// умовний оператор, який присвоює значення змінній на основі якоїсь умови.
var x = (y < 18) ? "Too young":"Old enough";

//
4 % 2;  //0
5 % 2;  //1

...........Існує 3 способи вилучення частини рядка:
slice(start, end)
substring(start, end)
substr(start, length)

...................Існує 3 способи вилучення рядкових символів:
charAt(position)
charCodeAt(position)
Доступ до власності []

..............Існує 3 методи JavaScript, які можна використовувати для перетворення змінних в числа:
Number()метод
parseInt()метод
parseFloat()метод


.....................................str
// може перетворити числа в рядки.
String(100 + 23);
(123).toString();

String.trim()    видаляє пробіл з обох сторін рядка.
'   Hello world!   '.trim()   // "Hello world!";

'аsd'.repeat(2);  // 'asdasd' - створює новий рядок, що містить вказану кількість об'єднаних разом копій рядка

//визначає, чи рядок закінчується na зазначеного рядка, повертаючи true або false
let str = 'To be, or not to be, that is the question.'
console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true







......................................arr
Array.isArray([]);    // true
arr.push('asd');         //добавляє нові елементи в кінець масива
arr.pop();               //витягує останній елемент з масива
arr.shift();
arr.unshift('asd');

str.split('');   розбиває рядок на масив заданим роздільником (", ", " ", "|", "-", ...)
arr.join('');   Створюється рядок із заданим роздільником (", ", " ", "|", "-", ...)

arr.splice(1, 0, 'asd', 'asd2');       //(index, del, el, el ...., el)
arr.slice(1, 3);          (start, end)  //для вилучення частини масиву
arr.concat(arr2);                 додавання двох масивів

arr.reduce((sum, el, index, arr) => sum + el, 0);    Метод запускає функцію для кожного елемента масиву , щоб зробити (зменшити його до) одне значення.
arr.map((el, index, arr) => el * 2);      Метод створює новий масив, виконуючи функцію для кожного елемента масиву
arr.forEach((el, index, arr) => el * 2);   Метод викликає функцію (функцію зворотного виклику) один раз для кожного елемента масиву.

arr.sort();                       для сортування масиівв
arr.sort( (a, b) => a - b );      для чисел в масиві
arr.sort( (a, b) => b - a});      для сортування від більшого до меншого
arr.sort( (a, b) => a.localeCompare(b) );   Для алфавітів краще використовувати
arr.reverse();    якщо йде після sort(), то сортує з низу алфавіту, а якщо сам то сортує з кінця маству

arr.filter((el, index, arr) => el > 18);   створює новий від фільтрований масив з елементів
arr.find((el, index, arr) => el > 18);      Метод повертає значення першого елемента масиву , який проходить тестову функцію.
arr.findIndex((el, index, arr) => el > 18);    Метод повертає індекс першого елемента масиву , який проходить тестову функцію.
arr.every((el, index, arr) => el > 18);       Перевірка масиву, якщо всі значення масиву пройдуть тест true, якщо ні то false
arr.some((el, index, arr) => el > 18);       Перевірка мвсиву , якщо хоч одне значення масиву пройде тест true, якщо ні то false

arr.indexOf(el, index);     шукає el починаючи з index і повертає індекс там, де його було знайдено, інакше -1.
arr.lastIndexOf(item, from);   повертає індекс останнього знайденого елемента.
arr.includes(item, from);   шукає, item починаючи з індексу from, повертає, true якщо знайдений.

Array.from(arrayLike[, mapFn[, thisArg]])  створює новий екземпляр Array (дрібну копію) з подібного до масиву або ітерабельного об'єкта.
Array.from('foo', el => el + 1);   // ["f1", "o1", "o1"]
Object.fromEntris(arr);                    перетворює масив у обєкт

arr.flat(Infinity) - створює новий масив який містить всі елементи вкладених масивів до вказаної глибини.
[1, 2, [3, 4, [5, 6]]].flat();      // [1, 2, 3, 4, [5, 6]]

arr.fill(value[, start[, end]])  заповнює (змінює) всі елементи масиву з початкового індексу
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]

[...new Set([1, 2, 3, 1, 2, 3])]; // [1, 2, 3] - Об'єкт дозволяє зберігати унікальні значення будь-якого типу
//Для створення унікального масиву об'єктів:
uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))


.......thisArg
Майже всі методи масиву, що функції виклику - як find, filter, map з помітним
виключенням sort, приймають необов'язковий додатковий параметр thisArg.
Значення thisArg параметра стає this для func.
Наприклад, тут ми використовуємо метод army об'єкта як фільтр і передаємо thisArg контекст:
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23


....Для копії масиву в JavaScript:
// способи роблять лише неглибоку копію :
// якщо original_array містить посилання на об'єкти, об’єкти не будуть клоновані,
// а будуть скопійовані лише посилання, і тому обидва масиви матимуть посилання
// на ті самі об’єкти.
1)   5.79ms -> clone(arr => Object.values(arr));
2)   7.23ms -> clone(arr => [].concat(arr));
3)   9.13ms -> clone(arr => arr.slice());
4)  24.04ms -> clone(arr => { const a = []; for (let val of arr) { a.push(val); } return a; });
5)  30.02ms -> clone(arr => [...arr]);
6)  39.72ms -> clone(arr => JSON.parse(JSON.stringify(arr)));
7)  99.80ms -> clone(arr => arr.map(i => i));
8) 259.29ms -> clone(arr => Object.assign([], arr));
9) Maximum call stack size exceeded -> clone(arr => Array.of(...arr));
// Примітка. З усіх них єдиний спосіб глибокого клонування масиву -
// - це використання JSON.parse(JSON.stringify(arr)).
// Однак, не використовуйте вище, якщо ваш масив може включати функції,
// оскільки він повернеться null.


....splice()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// (2) - визначає положення, куди слід додавати нові елементи (зрощувати їх).
// (0) - визначає, скільки елементів слід видалити .
// ("Лимон", "Ківі") - визначають нові елементи, які потрібно додати .
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);    //["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


.....flat()
var arr1 = [1, 2, [3, 4]];
arr1.flat();       // [1, 2, 3, 4]
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();      // [1, 2, 3, 4, [5, 6]]
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);     // [1, 2, 3, 4, 5, 6]
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//видаляє порожні слоти в масивах:
const arr5 = [1, 2, , 4, , 5];
arr5.flat();   // [1, 2, 4, 5]


....Array.from(arrayLike[, mapFn[, thisArg]])
// arrayLike - Подібний до масиву або ітерабельний об'єкт, який треба перетворити на масив.
// mapFn - Функція Map для виклику на кожному елементі масиву.
// thisArg - Значення this для функції mapFn.
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);      // [ "foo", "bar", "baz" ]
// Масив з а Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);    // [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());    // ['a', 'b'];
Array.from(mapper.keys());      // ['1', '2'];
// Масив з об’єкта, схожого на масив (аргументи)
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);   // [ 1, 2, 3 ]
// Використання функцій стрілок та Array.from()
Array.from([1, 2, 3], x => x + x);       // [2, 4, 6]
Array.from({length: 5}, (v, i) => i);   // [0, 1, 2, 3, 4]


.....fill(value[, start[, end]])
// value - Величина, якою потрібно заповнити масив.
// start - Початковий індекс, за замовчуванням 0.
// end - Кінцевий індекс, за замовчуванням this.length.
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
// Об'єкти за посиланнями.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "привіт"; // [{ hi: "привіт" }, { hi: "привіт" }, { hi: "привіт" }]









................................obj
//перетворює обєкт в масив
const obj = {name: 'Igor', age: 11, job: 'asd'}
console.log(Object.entries(obj));  //[['name', 'Igor'], ['age', 11], ['job', 'asd']]
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
//
var person = {name:"John", age:50, city:"New York"};
console.log(Object.keys(person));      // ["name", "age", "city"]
console.log(Object.values(person));    // ["John", 50, "New York"]


.......
Object.defineProperty()   дозволяє визначити властивість об'єкта та / або змінити значення
та / або метадані властивості.
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
};
// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,               // Значення властивості можна змінити
  enumerable : true,             // Властивість можна перерахувати
  configurable : true              // Властивість може бути налаштовано
});
//Метод також може бути використаний для додавання геттеров і сеттерів:
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});
Object.defineProperty(person, "add", {
  set : function (value) {this.counter += value;}
});


..innerHTML = Object.getOwnPropertyNames(myObject);    Повертає масив властивостей
// Додавання або зміна властивості об'єкта
Object.defineProperty(object, property, descriptor)
// A Додавання або зміна багатьох властивостей об'єкта
Object.defineProperties(object, descriptors)
// Доступ до властивостей
Object.getOwnPropertyDescriptor(object, property)
// Повертає всі властивості як масив
Object.getOwnPropertyNames(object)
// Повертає перелічені властивості як масив
Object.keys(object)
// Доступ до прототипу
Object.getPrototypeOf(object)
// Запобігає додаванню властивостей до об'єкта
Object.preventExtensions(object)
// Повертає true, якщо властивості можна додати до об'єкта
Object.isExtensible(object)
// Запобігає зміні властивостей об'єкта (не значень)
Object.seal(object)
// Повертає значення true, якщо об'єкт запечатаний
Object.isSealed(object)
// Запобігає будь-яким змінам об'єкта
Object.freeze(object)
// Повертає true, якщо об'єкт заморожений
Object.isFrozen(object)


.........prototype   Властивість JavaScript дозволяє додавати нові властивості до конструкторів об'єктів:
Person.prototype.nationality = "English";
........prototype    Властивість JavaScript також дозволяє додавати нові методи до конструкторів об'єктів:
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};


/////////////////Запозичуємо методи масиву
// Массивоподобний об'єкт: тут невід'ємні цілі числа використовуються як ключі
var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };
// Робимо швидку копію і зберігаємо її в реальний об'єкт:
// Перший параметр виставляє значення "this"
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log (newArray); // ["Martin", 78, 67, Array[3]]
//  Шукаємо Мартіна в нашому массівоподобном об'єкті
console.log (Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true
//  А тепер давайте застосуємо indexOf без виклику call () або apply ()
console.log (anArrayLikeObj.indexOf("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'
//  Перевертаємо об'єкт:
console.log (Array.prototype.reverse.call (anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}
// ми навіть можемо викликати pop ():
console.log (Array.prototype.pop.call (anArrayLikeObj));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}
//  А що у нас з push ()?
console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}


//зберігає пари ключ-значення. Будь-яке значення (і об'єкт, і примітивне значення)
//може бути використано і як ключ, і як значення.
new Map([iterable])








..................................RegExp(/[a-z]/, 'gi')
var str = "The rain in SPAIN stays mainly in the plain";
regex.exec(str)	Виконує пошук збігу в рядку. Він повертає масив інформації або null про невідповідність.
// /\bin\b/gi.exec(str);  //["in", index: 9, input: "The rain in SPAIN stays mainly in the plain", groups: undefined]
regex.test(str)	Тести на відповідність в рядку. Він повертається true або false.
// /in/gi.test(str);  //true
str.match(regex)	Повертає масив, що містить усі збіги, включаючи групи захоплення, або null якщо збіг не знайдено.
//str.match(/ain/g);  //Array(0: "ain", 1: "ain", 2: "ain", length:3);
str.matchAll(regex)	Повертає ітератор, що містить усі збіги, включаючи групи захоплення.
str.search(regex)	Тести на відповідність в рядку. Він повертає індекс збігу, або -1 якщо пошук не вдається.
// str.search(/in/gi);   // 6
str.replace(regex, new_el)	Виконує пошук збігу в рядку та замінює відповідна підрядка заміною підрядкою.
// str.replace(/in/gi, 'on');   // 'The raon on SPAon stays maonly on the plaon'
str.replaceAll(regex, new_el)	Виконує пошук усіх збігів у рядку та замінює відповідні підрядки заміною підрядкою.
str.split(regex)	Використовує регулярний вираз або фіксовану рядок для розбиття рядка на масив підрядів.
//str.split(/(\bin\b)/);   //["The rain ", "in", " SPAIN stays mainly ", "in", " the plain"]







......................................Number
x = +'12'; // 12
Number()          може конвертувати рядки в числа.
parseFloat ()     Розбирає рядок і повертає число з плаваючою точкою
parseInt ()        Розбирає рядок і повертає ціле число
toExponential ()      Повертає рядок з числом, округленим і записаним, використовуючи експоненціальні позначення.
toFixed ()            Повертає рядок із числом, округленим і записаним із заданою кількістю десяткових знаків.
toPrecision ()        Повертає рядок із номером, записаним із заданою довжиною
Math.round(x) повертає значення х округлення до найближчого цілого числа:
Math.pow(x, y) повертає значення x до сили y:
Math.sqrt(x) повертає квадратний корінь x:
Math.abs(x) повертає абсолютне (позитивне) значення x:
Math.ceil(x)повертає значення х округляється до верху його найближчого цілого числа:
Math.floor(x)повертає значення х округляється вниз до найближчого цілого числа:
Math.sin(x) повертає синус (значення між -1 та 1) кута x (заданий у радіанах).
Math.min()і Math.max()може бути використаний для пошуку найнижчого або найвищого значення у списку аргументів:
// var x = Math.max(0, 150, 30, 20, -8, -200);     шукає max в списку
Math.random() повертає випадкове число між 0 (включно) та 1 (виключно):
Math.floor(Math.random() * 10);        для повернення випадкових цілих чисел.

let numObj = 12345.6789
numObj.toFixed()       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': note rounding
numObj.toFixed(6)      // Returns '12345.678900': note added zeros
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3'

 //parseInt() Метод перетворює рядок у ціле число (ціле число).
 //Перший аргумент - це рядок для перетворення.
 //Другий Це базове число, яке використовується в математичних системах.
 var text = '42px';
 var integer = parseInt(text, 10);     // returns 42
 var integer = parseInt(11110111, 2);  // returns 42

 //parseFloat() Метод перетворює рядок в число з десятковою крапкою.
 var text = '3.14someRandomStuff';
 var pointNum = parseFloat(text);   // returns 3.14

//kim
Test.assertEquals(binary(100), "1100100")
Test.assertEquals(binary(1), "1")
Test.assertEquals(binary(0), "0")
Test.assertEquals(binary(69), "1000101")
function binary(decimal) {
  return decimal.toString(2);
}

//Math.round() повертає значення числа округлено до найближчого цілого числа.
Math.round( 20.49); //  20
Math.round( 20.5 ); //  21
Math.round( 42   ); //  42
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21

// Math.floor() повертає найбільше ціле число менше або дорівнює заданому числу.
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46

// Math.trunc() Функція повертає цілу частину числа шляхом видалення - дробові числа.
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
// Поліфіл
if (!Math.trunc) {
	Math.trunc = function (v) {
		return v < 0 ? Math.ceil(v) : Math.floor(v);
	};
}

//Math.ceil() завжди округлює число до наступного найбільшого цілого числа.
//повертає ціле число 0 і не дає помилки. Math.ceil(null) NaN
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7

//Повернути абсолютне значення числа:
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN

Метод Number.isInteger() визначає чи є передане значення цілим числом.
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false
Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger([1]);       // false
Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true


//знайти степінь числа х якщо є результат у (х в степенні)
Test.assertEquals(solveForExp(4, 1024), 5)
Test.assertEquals(solveForExp(2, 1024), 10)
Test.assertEquals(solveForExp(9, 3486784401), 10)
//kim
function solveForExp(a, b) {
  return Math.round(Math.log(b)/Math.log(a));   // 4 x 4 x 4 x 4 = 1024
}




.........................................Date
var d = new Date();
document.getElementById("demo").innerHTML = d;     всі дата
d.getFullYear();             рік
d.getMonth() + 1;            місяць
d.getDate();                день
d.getHours();
d.getMinutes();
d.getSeconds();
d.toUTCString();   Метод перетворює дату в рядок UTC (стандартний дисплей дати).
getUTCDate()
getUTCFullYear()
d.setFullYear(2020);    Метод встановлює рік об'єкта дати. У цьому прикладі до 2020 року:
d.toLocaleTimeString()   //07:51:00
