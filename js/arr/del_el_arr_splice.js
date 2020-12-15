function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]





// 2.
// вилучити елемент з позиції i.
const items = ['a', 'b', 'c', 'd', 'e', 'f']
const i = 2
const filteredItems = items.slice(0, i).concat(items.slice(i + 1, items.length))
// ["a", "b", "d", "e", "f"]



// 3.
// filter(), яке пропонує більш декларативний підхід:
const items = ['a', 'b', 'c', 'd', 'e', 'f']
const valueToRemove = 'c'
const filteredItems = items.filter(item => item !== valueToRemove)
// ["a", "b", "d", "e", "f"]