// Перші два числа 1, а потім 2(1+1), а потім 3(1+2), 5(2+3)і так далі:
// 1, 1, 2, 3, 5, 8, 13, 21....
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
// alert( fib(77) ); // 5527939700884757
