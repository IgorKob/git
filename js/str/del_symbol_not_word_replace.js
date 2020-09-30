// Цей код видаляє загальні символи та цифри з рядка, повертаючи лише букви.
// (Зверніть увагу, не всі символи включені.)

var  s =  "how19 a * re 254y ** ou?" ;
document.write (s.replace (/ [^ A-Za-z] / g,  "" ));



//kim
function lettersOnly(str) {
	return str.replace(/[^A-Za-z]/g, "");
}
