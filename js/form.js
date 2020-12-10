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



//                            validation
<input type="text" pattern=".{5,}">Nane
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$">Email
<input type="text" pattern="([0-9]|\s){2,}">Phone
<span data-validation-text>Must be 5 chars or more</span>
//css
// When the input is invalid & not blank
input:invalid:not(:placeholder-shown) {
	border: 2px solid red !important;
}
// When input is invalid, show and make the adjacanet validation text red 
input:invalid:not(:placeholder-shown) + [data-validation-text] {
	color: red !important;
	display: block;
}
// Hide validation text by default
[data-validation-text] {
	display: none;
}
