..........
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
String.trim()    видаляє пробіл з обох сторін рядка.
'   Hello world!   '.trim()   // "Hello world!";


'аsd'.repeat(2);  // 'asdasd' - створює новий рядок, що містить вказану кількість об'єднаних разом копій рядка


//визначає, чи рядок закінчується na зазначеного рядка, повертаючи true або false
let str = 'To be, or not to be, that is the question.'
console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true





................................arr
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
//
var person = {name:"John", age:50, city:"New York"};
console.log(Object.values(person));    // ["John", 50, "New York"]
//
var myArray = Object.keys(person);
console.log(myArray);           // ["name", "age", "city"]


//функцію, яка приймає об’єкт і повертає ключі та значення у вигляді окремих масивів.
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
//kim
function keysAndValues(obj) {
	return [Object.keys(obj), Object.values(obj)];
}




//Object.entries() повертає масив
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]
// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}
// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});



// Перетворення Objectна аMap
// new Map() Конструктор приймає итератор з entries. З Object.entries, ви можете легко
// конвертувати Object в Map:
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }




Object.values(обєкт)     Будь-який об’єкт JavaScript може бути перетворений в масив, використовуючи:
Object.defineProperty()    Метод також може бути використаний для додавання геттеров і сеттерів:
          приклад
 Object.defineProperty(obj, "decrement", {
   get : function () {this.counter--;}
   });
 Object.defineProperty(obj, "add", {
   set : function (value) {this.counter += value;}
   });



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
   ..........





   ...............
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
   .......Object.defineProperty()Метод також може бути використаний для додавання геттеров і сеттерів:
   Object.defineProperty(person, "fullName", {
     get : function () {return this.firstName + " " + this.lastName;}
   });
   ....
   ..innerHTML = Object.getOwnPropertyNames(myObject);    Повертає масив властивостей
   ..innerHTML = Object.keys(person);                     Повертає лише  властивості об'єкта:
   ///////////////
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






new Map([iterable])  зберігає пари ключ-значення. Будь-яке значення (і об'єкт, і примітивне значення) може бути використано і як ключ, і як значення.
////////////////////////////////////////////////////////////////////////

............................RegExp
// exec()	Виконує пошук збігу в рядку. Він повертає масив інформації або nullпро невідповідність.
// test()	Тести на відповідність в рядку. Він повертається trueабо false.
// match()	Повертає масив, що містить усі збіги, включаючи групи захоплення, або nullякщо збіг не знайдено.
// matchAll()	Повертає ітератор, що містить усі збіги, включаючи групи захоплення.
// search()	Тести на відповідність в рядку. Він повертає індекс збігу, або -1якщо пошук не вдається.
// replace()	Виконує пошук збігу в рядку та замінює відповідна підрядка заміною підрядкою.
// replaceAll()	Виконує пошук усіх збігів у рядку та замінює відповідні підрядки заміною підрядкою.
// split()	Використовує регулярний вираз або фіксовану рядок для розбиття рядка на масив підрядів.


regex.test("World"); // повертає true, якщо знайдено збіг, інакше false
regex.exec("World"); // повертає масив результатів, інакше null

RegExp(`${str}`, 'gi').test(el);

var x = "The rain in SPAIN stays mainly in the plain";
var y = x.match(/ain/g);
console.log(y);    //Array(0: "ain", 1: "ain", 2: "ain", length:3);


let str = 'asd w3Schools sd sa dsa d as d sad sa'
var n = str.search(/w3Schools/i);
console.log(n);    //4

search()Метод використовує вираз для пошуку відповідності, і повертає позицію матчу.
replace()     Метод замінює вказане значення з іншим значенням в рядку:

/e/.test(x);      шукає "е" в стрічці "х", і повертає тру або фолс
...   exec      шукає і повертає сам елемент, індекс елемента і цілі елементи

/e/.test(x);      шукає "е" в стрічці "х", і повертає тру або фолс
...   exec      шукає і повертає сам елемент, індекс елемента і цілі елементи
<p id="demo"></p>
<script>
var obj = /e/.exec("The best things in life are free!");
document.getElementById("demo").innerHTML =
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
</script>

var x = "The rain in SPAIN stays mainly in the plain";
var y = x.match(/ain/g);              шукає всі слова в стрічці
........
var x = document.getElementById("demo").innerHTML;
var y = x.replace("Microsoft","W3Schools");           шукає і замінює слова
document.getElementById("demo").innerHTML = y;
.......
...............
var n = str.search(/w3Schools/i);    шукає елемент в строці і повертає індекс початку
...................
var txt = str.replace(/microsoft/i,"W3Schools");    шукає і замінює перший елемент


search()   Метод використовує вираз для пошуку відповідності, і повертає позицію матчу.
replace()     Метод замінює вказане значення з іншим значенням в рядку:


.......шукає елемент в строці і повертає індекс початку
var n = str.search(/w3Schools/i);











............................Math
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



//знайти степінь числа х якщо є результат у (х в степенні)
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// expected output: 3
//
Test.assertEquals(solveForExp(4, 1024), 5)
Test.assertEquals(solveForExp(2, 1024), 10)
Test.assertEquals(solveForExp(9, 3486784401), 10)
//kim
function solveForExp(a, b) {
	return Math.round(Math.log(b)/Math.log(a));
}




Math.round(x) повертає значення х округлення до найближчого цілого числа:
Math.pow(x, y) повертає значення x до сили y:
Math.sqrt(x) повертає квадратний корінь x:
Math.abs(x) повертає абсолютне (позитивне) значення x:
Math.ceil(x)повертає значення х округляється до верху його найближчого цілого числа:
Math.floor(x)повертає значення х округляється вниз до найближчого цілого числа:
Math.sin(x) повертає синус (значення між -1 та 1) кута x (заданий у радіанах).
Math.min()і Math.max()може бути використаний для пошуку найнижчого або найвищого значення у списку аргументів:
Math.random() повертає випадкове число між 0 (включно) та 1 (виключно):
Math.floor(Math.random() * 10);        для повернення випадкових цілих чисел.

Boolean(10 > 9);
..............
var x = Math.max(0, 150, 30, 20, -8, -200);     шукає max в списку
.......

//////////////////////////////////












..............................Number
// може перетворити числа в рядки.
String(100 + 23);
(123).toString();
..
Number()          може конвертувати рядки в числа.
parseFloat ()     Розбирає рядок і повертає число з плаваючою точкою
parseInt ()        Розбирає рядок і повертає ціле число
toExponential ()      Повертає рядок з числом, округленим і записаним, використовуючи експоненціальні позначення.
toFixed ()            Повертає рядок із числом, округленим і записаним із заданою кількістю десяткових знаків.
toPrecision ()        Повертає рядок із номером, записаним із заданою довжиною

var x = 9.656;
 x.toFixed(2)               округлює число до двох знаків після коми
 ..............
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
 Number.isInteger(false);     // false
 Number.isInteger([1]);       // false
 Number.isInteger(5.0);       // true
 Number.isInteger(5.000000000000001); // false
 Number.isInteger(5.0000000000000001); // true







 //+
 x = +'12'; // 12

 //parseInt() Метод перетворює рядок у ціле число (ціле число).
 //Перший аргумент - це рядок для перетворення.
 //Другий Це базове число, яке використовується в математичних системах.
 var text = '42px';
 var integer = parseInt(text, 10);
 // returns 42
 var integer = parseInt(11110111, 2);
 // returns 42



 //parseFloat() Метод перетворює рядок в число з десятковою крапкою.
 var text = '3.14someRandomStuff';
 var pointNum = parseFloat(text);
 // returns 3.14




 //Number() Метод перетворює рядок в число.
 //Іноді це ціле число. В іншому випадку це крапка.
 //І якщо ви передасте рядок із випадковим текстом, ви отримаєте NaN абревіатуру "Не число".
 //Внаслідок цієї невідповідності вибір є менш безпечним, ніж parseInt()та parseFloat().
 //Якщо ви хочете, щоб у рядку не виходило, NaNякщо в ньому є інші символи,
 //це Number()може бути кращим вибором.
 Number('123'); // returns 123
 Number('12.3'); // returns 12.3
 Number('3.14someRandomStuff'); // returns NaN
 Number('42px'); // returns NaN








 //kim
 Test.assertEquals(binary(100), "1100100")
 Test.assertEquals(binary(1), "1")
 Test.assertEquals(binary(0), "0")
 Test.assertEquals(binary(69), "1000101")
 function binary(decimal) {
   return decimal.toString(2);
 }






 //Math.trunc() Функція повертає цілу частину числа шляхом видалення яких - або дробові числа.
 Math.trunc(13.37);    // 13
 Math.trunc(42.84);    // 42
 Math.trunc(0.123);    //  0
 Math.trunc(-0.123);   // -0
 Math.trunc('-1.123'); // -1
 Math.trunc(NaN);      // NaN
 Math.trunc('foo');    // NaN
 Math.trunc();         // NaN




 //
 let numObj = 12345.6789
 numObj.toFixed()       // Returns '12346': note rounding, no fractional part
 numObj.toFixed(1)      // Returns '12345.7': note rounding
 numObj.toFixed(6)      // Returns '12345.678900': note added zeros
 (1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
 (1.23e-10).toFixed(2)  // Returns '0.00'
 2.34.toFixed(1)        // Returns '2.3'
 2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
 2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
 -2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
 (-2.34).toFixed(1)     // Returns '-2.3'






 //перетворити ціле число, скажімо 12345, на масив на зразок [1,2,3,4,5]
 Array.from(String(12345), Number);
 // перетворить число в рядок, візьме кожен символ цього рядка, перетворить його в число і
 // поставить у новий масив. Нарешті, цей новий масив чисел буде повернутий.
 const numToSeparate = 12345;
 const arrayOfDigits = Array.from(String(numToSeparate), Number);
 console.log(arrayOfDigits);   //[1,2,3,4,5]

///////////////////////////
































.....................Date
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
