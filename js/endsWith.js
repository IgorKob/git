// визначає, чи рядок закінчується na зазначеного рядка, повертаючи true або false
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false



////
let str = 'To be, or not to be, that is the question.'
console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true


// Цей метод був доданий до специфікації ECMAScript 6 і, можливо, ще не доступний
// у всіх реалізаціях JavaScript. Однак ви можете поліфікувати
// String.prototype.endsWith()за допомогою наступного фрагмента:
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}
