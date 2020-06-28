// Для дублювання масиву в JavaScript:

// способи роблять лише неглибоку копію :
// якщо original_array містить посилання на об'єкти, об’єкти не будуть клоновані,
// а будуть скопійовані лише посилання, і тому обидва масиви матимуть посилання
// на ті самі об’єкти.

1)   5.79ms -> clone(arr => Object.values(arr));
2)   7.23ms -> clone(arr => [].concat(arr));
3)   9.13ms -> clone(arr => arr.slice());
4)  24.04ms -> clone(arr => { const a = []; for (let val of arr) { a.push(val); } return a; });
5)  30.02ms -> clone(arr => [...arr]);
6)  39.72ms -> clone(arr => JSON.parse(JSON.stringify(arr)));
7)  99.80ms -> clone(arr => arr.map(i => i));
8) 259.29ms -> clone(arr => Object.assign([], arr));
9) Maximum call stack size exceeded -> clone(arr => Array.of(...arr));
// Примітка. З усіх них єдиний спосіб глибокого клонування масиву -
// - це використання JSON.parse(JSON.stringify(arr)).
// Однак, не використовуйте вище, якщо ваш масив може включати функції,
// оскільки він повернеться null.
