.............Для доступу до масивів всередині масивів використовуйте цикл для введення для кожного масиву:
var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
    {"name":"BMW", "models":["320", "X3", "X5"]},
    {"name":"Fiat", "models":["500", "Panda"] }
  ]
}
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}
document.getElementById("demo").innerHTML = x;





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
