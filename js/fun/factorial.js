// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
