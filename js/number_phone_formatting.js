//kim
function formatPhoneNumber(numbers) {
	return `(${(numbers.slice(0,3)).join('')}) ${(numbers.slice(3,6)).join('')}-${(numbers.slice(6)).join('')}`;
}
Test.assertSimilar(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
Test.assertSimilar(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]), "(519) 555-4468")
Test.assertSimilar(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]), "(345) 501-2527")


//
function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split('');
  numbers.forEach(n => {
    arr[arr.indexOf('X')] = n;
  });
  return arr.join('');
}


//
function formatPhoneNumber(numbers) {
  let masked = '(###) ###-####';
  numbers.forEach(v => masked = masked.replace("#", v));
  return masked;
}


//
function formatPhoneNumber(numbers) {
   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
