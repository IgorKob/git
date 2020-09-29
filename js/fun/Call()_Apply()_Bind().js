Call (), Apply () і Bind () використовють в плані виставлення значення this
у функцій, для створення і виконання варіативних функцій і для запозичення методів і функцій.
....call()    За допомогою методу можна написати метод, який можна використовувати на різних об'єктах.
...................Різниця полягає в:
call()      Метод приймає аргументи окремо .
apply()     Метод приймає аргументи як масив .
Параметри в bind() ідентичні call(), але bind() не викликається відразу ж. Замість цього, bind() повертає функцію з
контекстом this, який вже пов'язаний. Через це bind() корисний тоді, коли ми не знаємо всі аргументи наперед.

let obj = {
  name: 'igor',
  last: 'kob'
};

let fun = {
  fullName: function(city, country) {
    return this.name + ' ' + this.last + ' ' + city + ' ' + country;
  }
};
console.log(fun.fullName.call(obj, 'lviv', 'ukraine'));      // igor kob lviv ukraine
console.log(fun.fullName.apply(obj, ['lviv', 'ukraine']));   // igor kob lviv ukraine
let bind2 = fun.fullName.bind(obj, 'lviv')
console.log(bind2);                                         // ƒ(city, country) { return this.name + ' ' + this.last + ' ' + city + ' ' + country;}
console.log(bind2('ukraine'));                              // igor kob lviv ukraine



....................знайти найбільшу кількість (у списку чисел) за допомогою Math.max()методу:
document.getElementById("demo").innerHTML = Math.max(1,2,3);
Math.max.apply(null, [1,2,3]);
Math.max.apply(Math, [1,2,3]);
Math.max.apply(" ", [1,2,3]);
Math.max.apply(0, [1,2,3]);

..............bind() створює нову функцію, яка в момент виклику має певне присвоєне значення this,
//а також задану послідовність аргументів, що передують будь-яким аргументам, переданим під час виклику нової функції.
//person.fullName.bind(null, "male", 45) - ми передаємо null, так як ми не використовуємо this у функції


Параметри в bind()ідентичні call(), але bind()не викликається відразу ж. Замість цього, bind()повертає функцію з
контекстом this, який вже пов'язаний. Через це bind()корисний тоді, коли ми не знаємо всі аргументи наперед.
var small = {
  a: 1,
  go: function (b, c, d) {
    console.log (this.a + b + c + d);
  }
}
var large = {
  a: 100
}
small.go (2,3,4);
// logs 1 + 2 + 3 + 4 => 10
//кщо ми не знаємо все три аргументи то можемо використовувати bind
var bindTest = small.go.bind (large, 2);
console.log (bindTest);
// logs => function (b, c, d) {console.log (this.a + b + c + d);}
//Так що наш thisбув успішно приєднаний до large. Ми також передали
//наш другий аргумент, як число 2. Пізніше, коли відомі інші аргументи, ми можемо передати їх:
bindTest (3,4);
// logs 100 + 2 + 3 + 4 => 109





.............
this.x = 9;    // тут значення this посилається на глобальний об'єкт переглядача "window"
var module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX();
// вертає 9 - Функція виконується в глобальній області видимості
// Створюємо нову функцію, прив'язуючи 'this' до об'єкта module
// Програмісти-новачки можуть переплутати
// глобальну змінну var x з властивістю x об'єкта module
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
