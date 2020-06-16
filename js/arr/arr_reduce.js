// getAverageAge(users)  отримує масив об'єктів із властивістю age та 
// повертає середній вік.
//
// Формула середнього значення є (age1 + age2 + ... + ageN) / N

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28
