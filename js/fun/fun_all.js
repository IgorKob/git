..........
onblur="myFunction()"           коли курсор покидає елемент
onchange="myFunction()"            коли курсор покидає елемент
onselect="myFunction()"          коли виділяється текст спрацьовує
onmousemove="myFunction(event)"   коли мишка перемішається
onmouseout="clearCoor()"           коли мишка залишає елемент
ondblclick="myFunction()"           подійний кпік


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



...arr
//flat() - створює новий масив який містить всі елементи вкладених масивів до вказаної глибини.
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



...Array.from() створює новий екземпляр Array (дрібну копію) з подібного до масиву або ітерабельного об'єкта.
// Масив з а String
Array.from('foo');    // [ "f", "o", "o" ]
// Масив з а Set
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



....RegExp
var x = "The rain in SPAIN stays mainly in the plain";
var y = x.match(/ain/g);
console.log(y);    //Array(0: "ain", 1: "ain", 2: "ain", length:3);


let str = 'asd w3Schools sd sa dsa d as d sad sa'
var n = str.search(/w3Schools/i);
console.log(n);    //4



 x.sort();                                  для сортування масиівв
 x.sort(function(a, b){return a - b});      для чисел в масиві
 x.sort(function(a, b){return b - a});      для сортування від більшого до меншого
 x.reverse();   якщо йде після sort(), то сортує з низу алфавіту, а якщо сам то сортує з кінця маству
 function myArrayMax(arr) { return Math.max.apply(null, arr);}     для пошуку max
 forEach()Метод викликає функцію (функцію зворотного виклику) один раз для кожного елемента масиву.
 map() Метод створює новий масив, виконуючи функцію для кожного елемента масиву.(function myFunction(value,index,array){return value * 2;})
 filter ()   створює новий масив з елементів, значення яких перевищує 18:

 find()            Метод повертає значення першого елемента масиву , який проходить тестову функцію.
 findIndex()       Метод повертає індекс першого елемента масиву , який проходить тестову функцію.
 every()           Перевірка масиву , якщо всі значення масиву пройдуть тест.(true, false)
 some()            Перевірка мвсиву , якщо зоч одне значення масиву пройде тест.(true, false)

 Array.reduce ()    Метод запускає функцію для кожного елемента масиву , щоб зробити (зменшити його до) одне значення.
 indexOf()         Метод шукає елемента в масиві і повертає його позицію.
 lastIndexOf()     повертає положення останнього знайденого елемента.


 /e/.test(x);      шукає "е" в стрічці "х", і повертає тру або фолс
 ...   exec      шукає і повертає сам елемент, індекс елемента і цілі елементи
 <p id="demo"></p>
 <script>
 var obj = /e/.exec("The best things in life are free!");
 document.getElementById("demo").innerHTML =
 "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
 </script>

 .....
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

 ..............
 var x = Math.max(0, 150, 30, 20, -8, -200);     шукає max в списку
 .......
 var x = "The rain in SPAIN stays mainly in the plain";
 var y = x.match(/ain/g);              шукає всі слова в стрічці
 ........
 var x = document.getElementById("demo").innerHTML;
 var y = x.replace("Microsoft","W3Schools");           шукає і замінює слова
 document.getElementById("demo").innerHTML = y;
 .......
 var x = 9.656;
  x.toFixed(2)               округлює число до двох знаків після коми
  ..............

  ...............
  var n = str.search(/w3Schools/i);    шукає елемент в строці і повертає індекс початку
  ...................
  var txt = str.replace(/microsoft/i,"W3Schools");    шукає і замінює перший елемент


 search()Метод використовує вираз для пошуку відповідності, і повертає позицію матчу.
 replace()     Метод замінює вказане значення з іншим значенням в рядку:

 String.trim()    видаляє пробіл з обох сторін рядка.
 isArray()методі перевіряє, чи є об'єкт масиву.
 forEach()Метод викликає функцію один раз для кожного елемента масиву.

 JSON.parse()   використовується для перетворення тексту в об’єкт JavaScript:
 JSON.stringify()           щоб перетворити елемент в рядок.

  Object.values(обєкт)     Будь-який об’єкт JavaScript може бути перетворений в масив, використовуючи:
 Object.defineProperty()    Метод також може бути використаний для додавання геттеров і сеттерів:
            приклад
   Object.defineProperty(obj, "decrement", {
     get : function () {this.counter--;}
     });
   Object.defineProperty(obj, "add", {
     set : function (value) {this.counter += value;}
     });



.......шукає елемент в строці і повертає індекс початку
var n = str.search(/w3Schools/i);
......шукає і замінює перший елемент
var txt = str.replace(/microsoft/i,"W3Schools");



................Array.forEach()  Метод викликає функцію (функцію зворотного виклику) один раз для кожного елемента масиву.
<p id="demo"></p>
<script>
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;
function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
</script>
.................Array.map ()      помножує кожне значення масиву на 2:
<p id="demo"></p>
<script>
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
document.getElementById("demo").innerHTML = numbers2;
function myFunction(value, index, array) {
  return value * 2;
}
</script>
.............Array.filter ()   створює новий масив з елементів, значення яких перевищує 18:
<p id="demo"></p>
<script>
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
document.getElementById("demo").innerHTML = over18;
function myFunction(value, index, array) {
  return value > 18;
}
</script>
...............Array.reduce ()    Цей приклад знаходить суму всіх чисел у масиві:
<p id="demo"></p>
<script>
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);
document.getElementById("demo").innerHTML = "The sum is " + sum;
function myFunction(total, value, index, array) {
  return total + value;
}
</script>
..............indexOf    Шукайте в масиві елемента "Apple":
<p id="demo"></p>
<script>
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
document.getElementById("demo").innerHTML = a;
</script>
......Array.lastIndexOf()є таким же, як Array.indexOf(), але повертає положення
останнього виникнення зазначеного елемента.
...........find()   Цей приклад знаходить (повертає значення) першого елемента, який перевищує 18:
<p id="demo"></p>
<script>
var numbers = [4, 39, 16, 25, 29];
var first = numbers.find(myFunction);
document.getElementById("demo").innerHTML = first;
function myFunction(value, index, array) {
  return value > 18;
}
</script>
....findIndex()
Цей приклад знаходить індекс першого елемента, який перевищує 18:
........



...........замінює слово, з не чутливим регістром /----/i
Щоб замінити всі збіги, використовуйте регулярний вираз із /g
<button onclick="myFunction()">Try it</button>
<p id="demo">Please visit Microsoft!</p>
<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML;
  var txt = str.replace(/MICROSOFT/i,"W3Schools");
  document.getElementById("demo").innerHTML = txt;
}
</script>





..............push  додаваня елемента до масиву
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo").innerHTML = fruits;
}
</script>




.............length     додаваня елемента до масиву
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
  fruits[fruits.length] = "Lemon";
  document.getElementById("demo").innerHTML = fruits;
}
</script>
....................split() методом: можна перетворення рядка в масив
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
<script>
function myFunction() {
  var str = "a,b,c,d,e,f";
  var arr = str.split(",");
  document.getElementById("demo").innerHTML = arr[0];
}
</script>
..................Доступ до останнього елемента масиву
х = ["Banana", "Orange", "Apple", "Mango"];
var last = х[х.length - 1];
.....................Як дізнатись, чи є змінною масив?
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits instanceof Array;
</script>
..................join() об'єднує всі елементи масиву в рядок і можете вказати роздільник між ними:
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" , ");
</script>
...............splice(2, 0, "Lemon", "Kiwi")
Перший параметр (2) визначає положення, куди слід додавати нові елементи (зрощувати їх).
Другий параметр (0) визначає, скільки елементів слід видалити .
Решта параметрів ("Лимон", "Ківі") визначають нові елементи, які потрібно додати .
ви можете використовувати splice()для видалення елементів, не залишаючи «дірок» у масиві: splice(0, 1)
<button onclick="myFunction()">Try it</button>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo2").innerHTML = fruits;
}
</script>
.....................Date
<p id="demo"></p>
<script>
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
</script>
