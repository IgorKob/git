//Math.round() повертає значення числа округлено до найближчого цілого числа.
Math.round( 20.49); //  20
Math.round( 20.5 ); //  21
Math.round( 42   ); //  42
Math.round(-20.5 ); // -20
Math.round(-20.51); // -21




// Math.floor() повертає найбільше ціле число менше або дорівнює заданому числу.
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46




// Math.trunc() Функція повертає цілу частину числа шляхом видалення - дробові числа.
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
// Поліфіл
if (!Math.trunc) {
	Math.trunc = function (v) {
		return v < 0 ? Math.ceil(v) : Math.floor(v);
	};
}





//Math.ceil() завжди округлює число до наступного найбільшого цілого числа.
//повертає ціле число 0 і не дає помилки. Math.ceil(null) NaN
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
