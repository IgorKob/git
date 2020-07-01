//kim
function totalVolume(...boxes) {
	return boxes.reduce((sum,el)=>sum += el.reduce((sum,el)=>sum*el), 0);
}
//
const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);
//
  
