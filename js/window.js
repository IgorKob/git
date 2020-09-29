У JavaScript є три види спливаючих вікон: поле сповіщення, поле підтвердження та поле підказки.
alert("I am an alert box!");         спливає вікно сповіщення, користувачеві доведеться натиснути «ОК»,
                          щоб продовжити.
confirm("sometext");                 Коли з'явиться вікно підтвердження, користувачеві доведеться натиснути
                          або «ОК» або «Скасувати», щоб продовжити.
prompt("sometext","defaultText");    Коли з'явиться вікно підказки, користувачеві доведеться натиснути або
                         "OK" або "Скасувати", щоб продовжити після введення вхідного значення.

\n                Щоб відобразити розриви рядків всередині спливаючого вікна



...........window
x = window.open("", "", "width=300, height=300");   відкриває нове вікно
x.moveTo(123,123);                                     коокдинати вікна
x.focus();
x.resizeBy(234,234);                             збільшує вікно
x.close();                                        закриває вікно
  window.history.go(-2)                          повертає історію вікна, відкриваючи попередній сайт
  window.history.back()                   повертає історію вікна
x = window.open("https://www.w3schools.com","_blank","toolbar=yes, location=yes, directories=no, status=no,
    menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
..............
screen.width;    щирина екрану
screen.availHeight;      чиста висота без панелі задач
screen.colorDepth;         розпадність колір піксел
