.........Виконати JavaScript, коли збирається надрукувати сторінку:
<body onbeforeprint="myFunction()">
  <script>
function myFunction() {
  alert("You are about to print this document!");
}
</script>
......Виконайте JavaScript, коли сторінка почала друкувати
<body onafterprint="myFunction()">
