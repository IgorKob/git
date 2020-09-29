HTML DOM - це стандарт для отримання, зміни, додавання або видалення елементів HTML.

.....є такі властивості вузла для навігації між вузлами за допомогою JavaScript:
parentNode
childNodes[nodenumber]       var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
firstChild                  var myTitle = document.getElementById("demo").firstChild.nodeValue;
lastChild
nextSibling
previousSibling

             Пошук елементів HTML
document.getElementById(id)        Знайдіть елемент за ідентифікатором елемента
document.getElementsByTagName(ім'я)   Знайдіть елементи за назвою тегів
document.getElementsByClassName(ім'я)   Знайдіть елементи за назвою класу

             Зміна елементів HTML
element.innerHTML = новий вміст html        Змініть внутрішній HTML елемент
element.attribute = нове значення            Змінення значення атрибута елемента HTML
element.style.property = новий стиль         Змінення стилю HTML-елемента
element.setAttribute (атрибут, значення)      Змінення значення атрибута елемента HTML

            Додавання та видалення елементів
document.createElement (елемент) Створіть HTML-елемент
document.removeChild (елемент) Видаліть HTML-елемент
document.appendChild (елемент) Додати HTML-елемент
document.replaceChild (новий, старий) Замініть HTML-елемент
document.write (текст) Запишіть у вихідний потік HTML

      Додавання обробників подій
document.getElementById (id) .onclick = function () {code} Додавання коду обробника події до події onclick
div.addEventListener('click', function() {...});

               Пошук об'єктів HTML
document.anchors Повертає всі елементи <a>, які мають атрибут 1
document.applets Повертає всі елементи <applet> (застарілі в HTML5) 1
document.baseURI Повертає абсолютний базовий URI документа 3
document.body Повертає елемент <body> 1
document.cookie Повертає файл cookie документа 1
document.doctype Повертає документ 3
document.documentElement Повертає <html> елемент 3
document.documentMode Повертає режим, який використовується браузером 3
document.documentURI Повертає URI документа 3
document.domain Повертає доменне ім'я сервера документів 1
document.domConfig Застарілий. Повертає конфігурацію DOM 3
document.embeds Повертає всі <embed> елементи 3
document.forms Повертає всі елементи <form> 1
document.head Повертає елемент <head> 3
document.images Повертає всі елементи <img> 1
document.implementation Повертає реалізацію DOM 3
document.inputEncoding Повертає кодування документа (набір символів) 3
document.lastModified Повертає дату та час оновлення документа 3
document.links Повертає всі елементи <area> та <a>, які мають атрибут href 1
document.readyState Повертає статус (завантаження) документа 3
document.referrer Повертає URI реферала (пов'язуючий документ) 1
document.scripts Повертає всі елементи <script> 3
document.strictErrorChecking Повертається, якщо перевірка помилок виконується 3
document.title Повертає елемент <title> 1
document.URL Повертає повну URL-адресу документа
