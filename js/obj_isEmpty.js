// функція, яка повертає true якщо об’єкт порожній а інше false

//kim
function isEmpty(obj) {
	let t = true;
	for (let key in obj) {
		if(key) { t = false; }
	}
	return t;
}


//
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}




//
var myObj = {}; // Empty Object
if(isEmpty(myObj)) {
    // Object is empty (Would return true in this example)
} else {
    // Object is NOT empty
}




//keys object
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
