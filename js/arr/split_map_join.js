Translate border-left-width to borderLeftWidth
видаляє всі тире, кожне слово після тире стає великим.
camelize("list-style-image") == 'listStyleImage';


function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
