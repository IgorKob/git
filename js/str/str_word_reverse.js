// функцію, яка перевертає всі слова у реченні, які починаються з певної літери.
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"
specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"
specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
//kim
function specialReverse(s, c) {
	return s.split(' ').map((el)=>{
//  if (el[0] == c) {
	if (RegExp(`^${c}`, 'gi').test(el)) {
    el = el.split('').reverse().join('');
		return el;
	}
		return el;
	}
	).join(' ');
}
//
function specialReverse(s, c) {
	return s.split(" ")
		.map(x => x[0]== c ? x.split("").reverse().join(""):x)
		.join(" ");
}
//
function specialReverse(s, c) {
  return s
    .split(' ')
    .map(x => {
      return x.includes(c) ? [...x].reverse().join('') : x;
    })
    .join(' ');
}
//
