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
