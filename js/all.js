"use strict";    Оголошення суворого режиму

.............JavaScript може "відображати" дані різними способами:
Введення в елемент HTML, використовуючи innerHTML.
Запис у вихідний HTML за допомогою document.write().
Запис у поле сповіщення, використовуючи window.alert().
Введення в консоль браузера, за допомогою console.log().

У JavaScript існує 5 різних типів даних, які можуть містити значення:
string
number
boolean
object
function
   Є 6 типів об'єктів:
Object
Date
Array
String
Number
Boolean
 І два типи даних, які не можуть містити значення:
null
undefined


typeof       оператором, щоб знайти тип даних змінної JavaScript.
constructor   Властивість повертає функцію конструктора для всіх змінних JavaScript.
.........     щоб перевітири чи є елемент Array (відповідь true)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);
function isArray(fruits) {
  return fruits.constructor === Array;
}






<p id="demo2">JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="myFunction()">Click Me!</button>
<script>
function myFunction() {
  document.getElementById("demo2").style.color = "red";
  document.getElementById("demo2").style.backgroundColor = "yellow";
  document.getElementById("demo2").style.fontSize = "18px";
  document.getElementById("imgbox1").style.display = "none";
  document.getElementById("imgbox1").style.display = "block";
  document.getElementById("imgbox2").style.visibility = "hidden";
  document.getElementById("imgbox2").style.visibility = "visible";
  document.getElementById("demo4").src = "2.jpg"; }
}
</script>



отримати доступ до елемента <html> (HEAD, TITLE, BODY)
var x = document.getElementsByTagName("HTML")[0];

отримати доступ до елемента <hr> (<h>, <br>, <p>, <pre>....та інших елементів)
var x = document.getElementById("myHR");

створити елемент <hr> (<br>, <p>, <pre>, HEAD, TITLE, BODY....та інших елементів)
var x = document.createElement("HR");


<p> Натисніть кнопку, щоб встановити колір фону документа червоним. </p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = "red";
}
</script>



---------
<p> Клацніть кнопку, щоб змінити колір фону документа. </p>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  document.body.style.backgroundColor = "yellow";
}
</script>
