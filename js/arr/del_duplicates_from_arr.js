// для двох масивів
// а для того щоб отримати повторувальні ел. return arr.indexOf(elem) != pos;
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};
// ()=>{}
var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

var test = ['mike','james','james','alex'];
var testBis = ['alex', 'yuri', 'jabari'];
console.log(uniqueArray(test.concat(testBis)));




// Set - Об'єкт дозволяє зберігати унікальні значення будь-якого типу,
// будь то примітивні значення або посилання на об'єкт.
//
[ ...new Set([1, 2, 3, 1, 2, 3]) ] // [1, 2, 3]






///sizeВластивість аксессор повертає кількість (унікальні) елементів в Setоб'єкті.
const set1 = new Set();
const object1 = {};
set1.add(42);
set1.add('forty two');
set1.add('forty two');
set1.add(object1);
console.log(set1.size);
// expected output: 3




\\\\\\\\\\\
//Для створення унікального масиву об'єктів:
uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))
\\\\\\\\\\\




//set
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}
console.log(removeDuplicateUsingSet(array_with_duplicates));




// for
let array_with_duplicates = ['DELHI','NEWYORK','DELHI','GOA','MUMBAI','CALIFORNIA','GOA']
function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}
console.log(removeDuplicates(array_with_duplcates)); // [ 'DELHI', 'NEWYORK', 'GOA', 'MUMBAI', 'CALIFORNIA' ]





//kim
//перевіряєм на однакову кількість унікальних елементів два масиви
function same(a1, a2) {
	let arr1 = [...new Set(a1)];
	let arr2 = [...new Set(a2)];
	return arr1.length == arr2.length;
}
