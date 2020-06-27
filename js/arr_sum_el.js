//Підсумовуйте масив чисел

//for цикл
function sum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

sum([1, 2, 3, 4, 5]); // 15





//за допомогою Array.prototype.reduce:
function sum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

sum([1, 2, 3, 4, 5]); // 15





//з рекурсією
function sum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

sum([1, 2, 3, 4, 5]); // 15
