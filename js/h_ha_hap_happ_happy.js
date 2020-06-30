//функція, яка бере слово і прописує його, послідовно додаючи букви до повного слова.
Test.assertSimilar(spelling("bee"), ['b', 'be', 'bee'])
Test.assertSimilar(spelling("cake"), ['c', 'ca', 'cak', 'cake'])
Test.assertSimilar(spelling("happy"), ['h', 'ha', 'hap', 'happ', 'happy'])
//kim
function spelling(str) {
	return str.length == 1 ? [str[0]] : ([spelling(str.slice(0, str.length-1)), str]).flat();
}
//
function spelling(str) {
return str.split('').map((c, i) => str.slice(0, i+1) );
}
//
const spelling = s => {
	let t = "", r = [];
	for(c of s){t += c,	r.push(t)};
	return r;
};
//
function spelling(str) {
	let newArr = [];
	for(let i = 1; i <= str.length; i++){
		newArr.push(str.slice(0, i));
	}
	return newArr;
}
