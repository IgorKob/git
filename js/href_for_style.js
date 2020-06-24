// всі зовнішні посилання оранжевими, змінивши їх style властивість.
// Посилання є зовнішнім, якщо:
// Її hrefє ://в ньому
// Але не починається з http://internal.com


let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // no attribute

  if (!href.includes('://')) continue; // no protocol

  if (href.startsWith('http://internal.com')) continue; // internal

  link.style.color = 'orange';
}







// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);
// links.forEach(link => link.style.color = 'orange');
