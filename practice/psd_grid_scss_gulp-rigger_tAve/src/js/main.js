// TOP NAV
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


// top nav select
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
  c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);




////header__nav
let nav_btn = document.getElementById('nav_btn');
let header__nav = document.getElementById("header__nav");
let header = document.getElementById("header");
let closebtn = document.getElementById('closebtn');

closebtn.addEventListener('click', function(e) {
  nav_btn.classList.toggle("change");
  header__nav.style.width = "0px";
  header__nav.style.right = "-50px";
  closebtn.style.display = 'none';
  header.style.marginRight = "0";
  document.body.style.backgroundColor = "white";
});

nav_btn.addEventListener('click', function(e) {

  if (header__nav.style.width == "320px") {
    nav_btn.classList.toggle("change");
    header__nav.style.width = "0px";
    header__nav.style.right = "-50px";
    header.style.marginRight = "0";
    // document.body.style.backgroundColor = "white";
    closebtn.style.display = 'none';

  } else {

    if (document.documentElement.clientWidth < '630') {
      console.log('kim min');
      header__nav.style.width = "100%";
    } else {
      header__nav.style.width = "320px";
    }

    nav_btn.classList.toggle("change");
    header__nav.style.right = "0px";
    header.style.marginRight = "320px";
    // document.body.style.background = "rgba(0,0,0,0.4)";
    closebtn.style.display = 'block';
  }

});



/////////////
let btnmenu = document.getElementsByClassName('products__nav-icon')[0];
let menu = document.getElementById('products__nav_ul');

btnmenu.addEventListener('click', function() {
    menu.classList.toggle("dgrid");
});
