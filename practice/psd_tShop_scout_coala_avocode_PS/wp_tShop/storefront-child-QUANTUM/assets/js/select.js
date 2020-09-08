//mob menu
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
//mob btn X
function mybtnmob() {
  let mob_menu = document.getElementById('container_mob_btn_x');
  let mob_menu_content = document.getElementById('menu-menu2');
  let mob_menu_usd = document.getElementById('usd_select0');
  let mob_menu_lang = document.getElementById('gtranslate_selector');

  mob_menu.classList.toggle("change");

  if (mob_menu_content.style.display == 'flex') {
    mob_menu_content.style.display = 'none';
    mob_menu_usd.style.display = 'none';
    mob_menu_lang.style.display = 'none';

  } else {
    mob_menu_content.style.display = 'flex';
    mob_menu_usd.style.display = 'block';
    mob_menu_lang.style.display = 'block';

  }

}
