// функцію, яка приймає масив та рядок як аргументи та повертає список,
// що включає заданий рядок. Повертайте імена в масиві в алфавітному порядку .
cmsSelector(["WordPress", "Joomla", "Drupal" ], "w");// ➞ ["WordPress"]
cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "ru");// ➞ ["Drupal"]
cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "");// ➞ ["Drupal", "Joomla", "Magento", "WordPress"]


//
const cmsSelector = (r,s) => r.filter(e => RegExp(`${s}`,'gi').test(e)).sort()



//kim
function cmsSelector(arr, str) {
	return arr.filter(el=>{
		if (RegExp(`${str}`, 'gi').test(el)) {
			return el;
		}
	}).sort();
}



//
let cmsSelector =(a,s)=> a.toLowerCase().filter(x => x.includes(s)).sort();



//
function cmsSelector(arr, str) {
		return arr.sort().filter(item => item.indexOf(str) >= 0)
}





///знайти слово «Немо», і повертає рядок str i index
Test.assertEquals(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!")
Test.assertEquals(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!")
Test.assertEquals(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!")
const findNemo = sentence => {
  const index = sentence.search(/\bNemo\b(?!')/);
  if (index === -1) return "I can't find Nemo :(";
  const wordNumber = (sentence.slice(0, index).match(/\s+/g) || []).length + 1;
  return `I found Nemo at ${wordNumber}!`;
};
//kim
function findNemo(str) {
	let arr2 =  str.split(' ').indexOf('Nemo')+1;
	return arr2 == 0 ? "I can't find Nemo :(" : `I found Nemo at ${arr2}!`;
}
