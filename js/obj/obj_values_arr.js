// Object.values() Метод повертає масив власних значень перелічуваних властивостей
// даного об'єкта, в тому ж порядку , як це передбачено в for...inциклі.
// (Єдина відмінність полягає в тому, що for...inцикл перераховує властивості і в
// ланцюзі прототипу.)
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
