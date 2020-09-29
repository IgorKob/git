.............показує координати при перемішені мишки
<div onmousemove="myff(event)"...
function myff(e) {
    x = e.clientX;
 y = e.clientY;
 coor = "Coordinates: (" + x + "," + y + ")";
 document.getElementById("asd2").innerHTML = coor
