.....................Date
<p id="demo"></p>
<script>
var d = new Date();
document.getElementById("demo").innerHTML = d;     всі дата
d.getFullYear();             рік
d.getMonth() + 1;            місяць
d.getDate();                день
d.getHours();
d.getMinutes();
d.getSeconds();
d.toUTCString();   Метод перетворює дату в рядок UTC (стандартний дисплей дати).
getUTCDate()
getUTCFullYear()
d.setFullYear(2020);    Метод встановлює рік об'єкта дати. У цьому прикладі до 2020 року:
</script>


..................годинник в реальному часі
<p id="demo"></p>
<script>
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>


........... годинник в реальному часі
<body onload="myff()">    //вкл при загрузці сторінки
<div id="asd"></div>
function myff() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  m = myff2(m);
  s = myff2(s);
  document.getElementById('asd').innerHTML = h+":"+m+":"+s;
  var t = setTimeout(myff, 500);        // обновляє функцію що 500мс
  function myff2(x) {
    if (x<10) {                        // якщо число менше 10 то перед ним додається 0
       x = "0" + x;
    }
       return x;
  }
}

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




...........d.getDay()  показує числом який зараз день, а число вже вказує в масиві на відповідне слово
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];





.......Напишіть функцію, яка приймає число secondsта повертає час годинника цифрового формату
//як рядок. Час слід відлічувати 00:00:00.
digitalClock(5025) ➞ "01:23:45"
// 5025 seconds is 1 hour, 23 mins, 45 secs.
digitalClock(61201) ➞ "17:00:01"
// No AM/PM. 24h format.
digitalClock(87000) ➞ "00:10:00"
// It's 00:10 next day.
//kim
function digitalClock(seconds) {
	return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}
