// щоб знайти суміжний підмасив arr з максимальною сумою елементів.
// getMaxSubSum([-1, 2, 3, -9]) ==2 + 3 == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 2 + 3 == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11 == 11
// getMaxSubSum([-2, -1, 1, 2]) == 1 + 2 == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100 == 100
// getMaxSubSum([1, 2, 3]) == 1 + 2 + 3 ==6 (take all)


function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
