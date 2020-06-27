// У trim()метод видаляє пробільні символи з обох кінців рядка.
// Пробіл у цьому контексті - це всі символи пробілу
// (пробіл, вкладка, пробіл без перерви тощо)
// та всі символи термінального рядка (LF, CR тощо).

const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";





// //
// Поліфіл
// Запуск наступного коду перед тим, як створить будь-який інший код,
// trim()якщо він не доступний у початковому режимі.

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
