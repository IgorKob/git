створити елемент <hr> (<br>, <p>, <pre>, HEAD, TITLE, BODY....та інших елементів)
var x = document.createElement("HR");


<p>Натисніть кнопку, щоб створити елемент H1 з деяким текстом.</p>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  var x = document.createElement("H1");
  var t = document.createTextNode("Ласкаво просимо на Мою домашню сторінку");
  x.appendChild(t);
  document.body.appendChild(x);
}
</script>



<p>Натисніть кнопку, щоб створити деякі елементи BR.</p>
<button onclick="myFunction()">Try it</button>
<p>Коли ви натискаєте кнопку, перед кожним прольотним елементом у діві вставляється елемент br,
що викликає відповідний розрив рядка в тексті нижче.</p>
<div id="myDIV">
  <span>Hello,</span>
  <span>My name is Bob.</span>
  <span>I live in Bobville.</span>
  <span>I am 45 years old.</span>
</div>
<script>
function myFunction() {
  // Get the div element with id="myDIV"
  var div = document.getElementById("myDIV");
  // Get all span elements inside of div
  var spans = div.getElementsByTagName("SPAN");
  // Create a loop which will insert a br element before each span element in div, starting from the second span element
  var i;
  for (i = 1; i < spans.length; i++) {
    var newElem = document.createElement("BR");
    div.insertBefore(newElem, spans[i]);
  }
}
</script>
