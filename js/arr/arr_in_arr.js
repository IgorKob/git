Test.assertSimilar(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4])
Test.assertSimilar(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd'])
Test.assertSimilar(flatten([[true, false], [false, false]]), [true, false, false, false])
//kim
function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
    arr2.push(arr[i][j]);
    }
	}
  return arr2;
}
//
function flatten(arr) {
	return [].concat(...arr)
}
//
function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2;
}
//
function flatten(arr) {
  return arr.reduce((a,b)=> a.concat(b))
}
//
function flatten(arr) {
  return JSON.parse('['+JSON.stringify(arr).replace(/[^a-z\d\s,"]/gi, '')+']')
}
//
