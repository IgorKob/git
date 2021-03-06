// flat()Метод створює новий масив з усіма елементами суб-масиву об'єднуються
// в неї рекурсивно до заданої глибини.
function deNest(arr) {
	return arr.flat(Infinity)[0];
}
deNest([[[[[[[[[[[[3]]]]]]]]]]]]);// ➞ 3
deNest([[[[[[[true]]]]]]]);// ➞ true
deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]);// ➞ "edabit"

///



const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



/////
Ущільнення та отвори для масиву
Плоский метод видаляє порожні слоти в масивах:
const arr5 = [1, 2, , 4, , 5];
arr5.flat();
// [1, 2, 4, 5]
