Анаграма - це слово чи словосполучення, утворене шляхом перестановки букв іншого слова чи фрази,
як правило, використовуючи всі оригінальні літери рівно один раз.
функція, яка приймає два рядки і повертає або, true або false залежно від того, анаграми вони чи ні.
isAnagram("cristian", "Cristina") ➞ true
isAnagram("Dave Barry", "Ray Adverb") ➞ true
isAnagram("Nope", "Note") ➞ false
//kim
function isAnagram(s1, s2) {
	return s1.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('') == s2.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
}
//
function isAnagram(s1, s2) {
  return s1.toLowerCase().replace(/\s+/g,'').split('').sort().join('')=== s2.toLowerCase().replace(/\s+/g,'').split('').sort().join('');
}
//
function isAnagram(s1, s2) {
  var str1 = s1.toLowerCase().split('').sort().join('').trim();
  var str2 = s2.toLowerCase().split('').sort().join('').trim();
  return str1===str2;
}
//
function isAnagram(s1, s2) {
  const resolve = s => Array.from(s.toLowerCase()).sort().join('');
  return resolve(s1) === resolve(s2);
}
//
var checkAnagram = (function () {
    var sanitizeRegex = /[^a-z0-9]/gi;
    var sanitizeString = function (str) {
        return str.replace(sanitizeRegex, '').toLowerCase().split('').sort().join('');
    };
    return function (str1, str2) {
        return sanitizeString(str1) === sanitizeString(str2);
    };
}());
var isAnagram = checkAnagram('Rust! Ha?', 'Tushar'); // Usage
//
