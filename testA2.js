function secondMax(inputArr) {
  if (inputArr.length === 0)
    return console.log("Please input array with number");
  let biggest = -Infinity;
  let secondBiggest = -Infinity;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= biggest) {
      secondBiggest = biggest;
      biggest = inputArr[i];
    } else if (inputArr[i] >= secondBiggest) {
      secondBiggest = inputArr[i];
    }
  }
  return secondBiggest;
}
// Test cases
secondMax([]);
secondMax([-1, 4, 30, 2, -4]);
secondMax([3, 4, 5, 6, 7]);
secondMax([3, 4, 5, 6, 7, 7]);
secondMax([7, 6, 5, 4]);
secondMax([7, 7, 5, 4]);
