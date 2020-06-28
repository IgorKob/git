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
