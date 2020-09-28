....onerror спрацьовує, коли виникає помилка під час завантаження зовнішнього файлу (наприклад, документа чи зображення).
<img src="image.gif" onerror="myFunction()">
<script>
function myFunction() {
  alert("The image could not be loaded.");
}
</script>
