// Масив з а String
Array.from('foo');
// [ "f", "o", "o" ]


// Масив з а Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]


// Масив з а Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];


// Масив з об’єкта, схожого на масив (аргументи)
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]


// Використання функцій стрілок та Array.from()
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]





// функцію, яка приймає два числа як аргументи ( num, length) і повертає масив кратних numдо length.
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
//kim
function arrayOfMultiples (num, length) {
	return Array.from({length: length}, (_,i)=>(i+1)*num);
}
//
function arrayOfMultiples (num, length) {
	var arr = [];
	for(let i = 1; i <= length; i++){
		var number = num * i;
		arr.push(number)
	}
	return arr
}
