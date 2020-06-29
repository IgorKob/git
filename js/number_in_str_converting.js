//+
x = +'12'; // 12

//parseInt() Метод перетворює рядок у ціле число (ціле число).
//Перший аргумент - це рядок для перетворення.
//Другий Це базове число, яке використовується в математичних системах.
var text = '42px';
var integer = parseInt(text, 10);
// returns 42
var integer = parseInt(11110111, 2);
// returns 42



//parseFloat() Метод перетворює рядок в число з десятковою крапкою.
var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
// returns 3.14




//Number() Метод перетворює рядок в число.
//Іноді це ціле число. В іншому випадку це крапка.
//І якщо ви передасте рядок із випадковим текстом, ви отримаєте NaN абревіатуру "Не число".
//Внаслідок цієї невідповідності вибір є менш безпечним, ніж parseInt()та parseFloat().
//Якщо ви хочете, щоб у рядку не виходило, NaNякщо в ньому є інші символи,
//це Number()може бути кращим вибором.
Number('123'); // returns 123
Number('12.3'); // returns 12.3
Number('3.14someRandomStuff'); // returns NaN
Number('42px'); // returns NaN








//kim
Test.assertEquals(binary(100), "1100100")
Test.assertEquals(binary(1), "1")
Test.assertEquals(binary(0), "0")
Test.assertEquals(binary(69), "1000101")
function binary(decimal) {
  return decimal.toString(2);
}






//Math.trunc() Функція повертає цілу частину числа шляхом видалення яких - або дробові числа.
Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN




//
let numObj = 12345.6789
numObj.toFixed()       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1)      // Returns '12345.7': note rounding
numObj.toFixed(6)      // Returns '12345.678900': note added zeros
(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3'
