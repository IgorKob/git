Враховуючи масив масивів, повертайте новий масив масивів, що містять усі елементи, крім зовнішніх елементів .
peelLayerOff([
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]) ➞ [
  ["f", "g"],
  ["j", "k"]
]
peelLayerOff([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35]
]) ➞ [
  [7, 8, 9],
  [12, 13, 14],
  [17, 18, 19],
  [22, 23, 24],
  [27, 28, 29]
]
peelLayerOff([
  [true, false, true],
  [false, false, true],
  [true, true, true]
]) ➞ [[false]]
peelLayerOff([
  ["hello", "world"],
  ["hello", "world"]
]) ➞ []
//kim
function peelLayerOff(arr) {
	return arr.slice(1, arr.length-1).map(el => el.slice(1, el.length-1));
}
//
function peelLayerOff(arr) {
	return arr.slice(1, -1).map(x => x.slice(1, -1));
}
//
function peelLayerOff(arr) {
	arr.pop();
	arr.shift();
	arr.map( x => x.pop() && x.shift());
	return arr;
}
//
function peelLayerOff(arr) {
	arr = arr.splice(1, arr.length - 2)
	for (let layer in arr) {
		arr[layer].splice(0, 1)
		arr[layer].splice(-1)
	}
	return arr
}
