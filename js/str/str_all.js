......шукає всі слова в стрічці
var x = "The rain in SPAIN stays mainly in the plain";
var y = x.match(/ain/g);      //["ain", "ain", "ain"]


....шукає і замінює слова
var x = document.getElementById("demo").innerHTML;
var y = x.replace("Microsoft","W3Schools");
document.getElementById("demo").innerHTML = y;
