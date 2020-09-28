....onerror спрацьовує, коли виникає помилка під час завантаження зовнішнього файлу (наприклад, документа чи зображення).
<img src="image.gif" onerror="myFunction()">
<script>
function myFunction() {
  alert("The image could not be loaded.");
}
</script>
......................................подій Форми
Атрибут onblur запускає функцію, коли елемент втрачає фокус (коли користувач залишає поле форми).
<input type="text" name="fname" id="fname" onblur="myFunction()">
<script>
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>
.........Виконати JavaScript, коли користувач щось вводить у поле <input>:
<input type="text" id="myInput" oninput="myFunction()">
<p id="demo"></p>
<script>
function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
</script>
.......Виконати JavaScript, коли поле введення недійсне: порожнє
<input type="text" oninvalid="alert('You must fill out the form!');" name="fname" required>
............................Вкажіть, що сервер приймає лише файли зображень при завантаженні файлу:
<form action="/action_page.php">
  <input type="file" name="pic" accept="image/*">
  <input type="submit">
</form>
