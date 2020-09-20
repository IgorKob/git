// nav
function myFunction() {
  let x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




//video
let times = 0, playY;
let video = document.getElementById('adaptive-wrap');
video.addEventListener('click', function() {
  let video_if = document.getElementById('work__video');
  let img = document.getElementById('adaptive-wrap__img');

  //play
  if(times == 0){
    playY = video_if.src += '?autoplay=1';
    times = 1;
  }
  //stop
  // if(times !== 0) {
  //   playY = playY.slice(0, -11);
  //   video_if.src = playY
  //   times = 0;
  // }

  //img - видаляємо заставку при натисканні(фонова картинка яка була в діві апсолютом)
  img.classList.toggle("kimafter");

});








// slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}