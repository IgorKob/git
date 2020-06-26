// Повторіть той самий пункт кілька разів
// Створіть функцію, яка бере два аргументи (item, times).
// Перший аргумент ( item) - це елемент, який потребує повторення,
// а другий аргумент ( times) - кількість разів, який потрібно повторити.
// Повернути результат у масив.
repeat("edabit", 3);// ➞ ["edabit", "edabit", "edabit"]
repeat(13, 5);// ➞ [13, 13, 13, 13, 13]
repeat("7", 2);// ➞ ["7", "7"]
repeat(0, 0);// ➞ []


function repeat(item, times) {
	return Array(times).fill(item);
}