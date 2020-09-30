// Різниця максимальних та мінімальних чисел у масиві
function diffMaxMin(arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max-min;
}

//
Test.assertEquals(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)
Test.assertEquals(diffMaxMin([-70, 43, 34, 54, 22]), 124)
