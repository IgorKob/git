
// top menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//sub menu
let openNav = document.getElementById('nav_btn');
let elem = document.body;
openNav.addEventListener('click', function() {

  // alert(elem.offsetWidth);

  if (elem.offsetWidth <= 480) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
  }

});

let closeNav = document.getElementById('close_btn');
closeNav.addEventListener('click', function() {
  document.getElementById("mySidenav").style.width = "0";
});
