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
///////////////
