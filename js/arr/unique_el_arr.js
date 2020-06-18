//  unique(arr) повинна повертати масив з унікальними елементами arr.
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
// function unique(arr) {
// let r = [];
// for (var v of arr) {
//   if (r.indexOf(v) == -1) {
//    r.push(v);
//   }
// }
// return r;
// }
