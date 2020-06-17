arr.push('asd');
arr.pop();
arr.shift();
arr.unshift('asd');

arr.splice(1, 1, 'asd', 'asd2');       index, del, el, el ...., el
arr.slice(1, 3);                 копіює
arr.concat('asd', 'asd2');

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

arr.indexOf(item, from)- шукає, itemпочинаючи з індексу from,
і повертає індекс там, де його було знайдено, інакше -1.
arr.lastIndexOf(item, from) - те саме, але шукає справа наліво.
arr.includes(item, from)- шукає, itemпочинаючи з індексу from,
повертає, true якщо знайдений.

let result = arr.find(function(item, index, array) {...});
Наприклад:
  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  let user = users.find(item => item.id == 1);
  alert(user.name); // John



let results = arr.filter(function(item, index, array) {....});
Наприклад:
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2


let result = arr.map(function(item, index, array) {....});
Наприклад, тут ми перетворюємо кожен елемент на його довжину:
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


arr.sort(function(a, b) { return a - b; });    Для чисел
arr.sort( (a, b) => a - b );      Для чисел
arr.sort( (a, b) => a.localeCompare(b) );  Для алфавітів краще використовувати

arr.reverse();

let arr = names.split(', ');   розбиває рядок на масив заданим роздільником
let str = arr.join(';');   Створюється рядок із заданим роздільником


let value = arr.reduce(function(accumulator, item, index, array) {...}, [initial]);
Тут ми отримуємо суму масиву в одному рядку:
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15


alert(Array.isArray([])); // true

.............
Майже всі методи масиву , що функції виклику - як find, filter, map з помітним
виключенням sort, приймають необов'язковий додатковий параметр thisArg.
Значення thisArgпараметра стає thisдля func.
Наприклад, тут ми використовуємо метод armyоб'єкта як фільтр і передаємо thisArgконтекст:
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
.............
