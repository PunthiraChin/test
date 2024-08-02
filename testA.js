function findBiggest(inputArr) {
  // Check if provide number in input array or not
  if (inputArr.length === 0)
    return console.log("Please input array with number");
  let biggest = inputArr[0];
  let secondBiggest = biggest;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= biggest) {
      secondBiggest = biggest;
      biggest = inputArr[i];
    }
  }
  return biggest;
}
// Test cases
findBiggest([]);
findBiggest([-1, 4, 30, 2, -4]);
findBiggest([3, 4, 5, 6, 7]);
findBiggest([3, 4, 5, 6, 7, 7]);
