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
