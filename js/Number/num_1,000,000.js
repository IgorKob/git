//функція яка добавляє коми, якщо число має тисячні:   1000000 -> 1,000,000 
//kim
function formatNum(num) {
	let arr = String(num).split('');
	let arr2 = [];
		while (true) {
		if (arr.length > 3) {
			arr2.unshift(',', arr.slice(-3));
			arr = arr.slice(0,-3);
		}
		if (arr.length < 3) {
			return arr.concat(arr2).flat().join('');
		}
	}
	return num;
}
//
function formatNum(num) {
	return num.toLocaleString();
}
function formatNum(num) {
	return num.toLocaleString('en-US');
}
//
function formatNum(num) {
	let ar = [...(''+num)];
  let i = ar.length;
  while (i -= 3) {
    if (i < 0) break;
    ar.splice(i, 0, ',');
  }
  return ar.join('');
}
//
function formatNum(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//
