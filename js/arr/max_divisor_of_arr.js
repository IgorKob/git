Напишіть функцію, яка повертає найбільший загальний дільник з усіх елементів масиву.
gcd([10, 20, 40]) ➞ 10
gcd([1, 2, 3, 100]) ➞ 1
gcd([1024, 192, 2048, 512]) ➞ 64
//kim
function gcd(arr) {
	arr.sort((a,b)=>a-b);
	for (let i = arr[0]; i >= 1; i--) {
		if (arr.every(el => el%i == 0))  return i;
	}
	return i;
}
//
const f = (a, b) => b ? f(b, a % b) : a;
const gcd = arr => arr.reduce(f);
//
const gcd = arr => {
	let x = Math.min(...arr);
	while (arr.some(n => n % x)) x--;
	return x;
};
//
function gcd(arr) {
     let someFunc = (a,b) => a ? someFunc(b%a, a) : b;
     return arr.reduce(someFunc);
}
//
