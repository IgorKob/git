function findLargestNum(arr) {
	return arr.reduce((max, el)=>{
		if (max<el) max=el;
		return max;
	});
}
