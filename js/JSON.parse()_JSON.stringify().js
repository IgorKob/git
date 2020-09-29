..........JSON - синтаксис для зберігання та обміну даними.
 // об’єкті JavaScript, ви можете перетворити у JSON та надіслати його на сервер:
var myJSON = JSON.stringify(myObj);
// формат JSON, перетворити у об’єкт JavaScript:
var myObj = JSON.parse(myJSON);
      Файли JSON
Тип файлу для файлів JSON - це ".json"
Тип MIME для тексту JSON - це "application / json"



.........для Date(value); в JSON.parse(text);
Перетворіть рядок у дату, використовуючи функцію
функція, яка перевіряє кожну властивість, перш ніж повертати значення.
var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

........для function в JSON.parse(text);
var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();

..............для дати і функцій (сам написав)
var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York", "birth":"1986-12-14"}';
var obj = JSON.parse(text, function(k, v) {
  if (k == "age") {
    return v = eval("(" + v + ")");
  }
  if (k == "birth") {
    return new Date(v);
  }
  else
  {
    return v;
  }
});
document.getElementById("demo").innerHTML = obj.age() + obj.birth;

................Перетворити об’єкт JavaScript у рядок із JSON.stringify()
перетворити функції в рядки перед запуском JSON.stringify() функції
var obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
