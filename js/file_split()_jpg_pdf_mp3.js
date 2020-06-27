Отримайте розширення файлу
функція, яка відображає файли до імен їх розширень.
getExtension(["code.html", "code.css"]);//➞ ["html", "css"]
getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]);//➞ ["jpg", "pdf", "mp3"]
getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])'//'➞ ["rb", "cpp", "py", "js"]

//kim fun
function getExtension(arr) {
	let a = arr.map((el)=>{
		let e = el.split('.');
		return e.pop();
	});
	return a;
}
