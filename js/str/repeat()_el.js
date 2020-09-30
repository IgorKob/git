// Вказавши число, поверніть рядок слова "Boom", який змінюється наступними способами:
// Рядок повинен містити nчисло "o" s, якщо тільки nце не нижче 2 (у такому випадку повернути "boom").
// Якщо nце число ділиться на 2 , додати знак оклику в кінці.
// Якщо nце рівномірно ділиться на 5 , повертає рядок в ALL CAPS .
// Якщо nце без остачі як 2 і 5 , повертає рядок в ALL CAPS і додати знак оклику в кінці.
Test.assertEquals(boomIntensity(0), "boom")
Test.assertEquals(boomIntensity(1), "boom")
Test.assertEquals(boomIntensity(2), "Boom!")
Test.assertEquals(boomIntensity(3), "Booom")
Test.assertEquals(boomIntensity(4), "Boooom!")
Test.assertEquals(boomIntensity(5), "BOOOOOM")
Test.assertEquals(boomIntensity(6), "Boooooom!")
Test.assertEquals(boomIntensity(7), "Booooooom")
Test.assertEquals(boomIntensity(8), "Boooooooom!")
Test.assertEquals(boomIntensity(9), "Booooooooom")
Test.assertEquals(boomIntensity(10), "BOOOOOOOOOOM!")
//
const boomIntensity = n => {
	if (n < 2) return 'boom';
	const boom = 'B' + 'o'.repeat(n) + 'm' + (!(n % 2) ? '!' : '');
	return !(n % 5) ? boom.toUpperCase() : boom;
};
//
const boomIntensity = num => {
  if (num < 2) return 'boom'
  let str = 'B' + 'o'.repeat(num) + 'm'
  if (num % 2 == 0) str = str + '!'
  if (num % 5 == 0) str = str.toUpperCase()
  return str
}
//
const boomIntensity = n => {
	let i = [n<2, !(n%10), !(n%5), !(n%2), true].indexOf(true);
	switch(i) {
		case 0: return `boom`;
		case 1: return `B${"O".repeat(n)}M!`;
		case 2: return `B${"O".repeat(n)}M`;
		case 3: return `B${"o".repeat(n)}m!`;
		case 4: return `B${"o".repeat(n)}m`;
	}
}
//
