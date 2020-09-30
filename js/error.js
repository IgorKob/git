try       Оператор дозволяє перевірити блок коду на наявність помилок.
catch     Оператор дозволяє обробляти помилку.
throw     Оператор дозволяє створювати призначені для користувача помилки.
finally   Оператор дозволяє виконати код, після того, як спробувати зловити,

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>
<script>
  function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
      if(x == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }
</script>




....onerror спрацьовує, коли виникає помилка під час завантаження зовнішнього файлу (наприклад, документа чи зображення).
<img src="image.gif" onerror="myFunction()">
<script>
function myFunction() {
  alert("The image could not be loaded.");
}
</script>



<script type = "text / javascript" src = "scripts.js"> </script>
<noscript> <p> На жаль! Сценарії відключені. </ P> </noscript>
