// Скажімо, ми отримали масив користувачів у формі {id:..., name:..., age... }.
//
// Створіть функцію, groupById(arr)яка створює з неї об’єкт, за допомогоюid

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}




// 2. перетворює обєкт в масив
const obj = {
  name: 'Igor',
  age: 11,
  job: 'asd'
}
console.log(Object.entries(obj));
//на виході буде масив
const arr = [
  ['name', 'Igor'],
  ['age', 11],
  ['job', 'asd']
]
//перетворює масив у обєкт
console.log(Object.fromEntris(arr));
