function findSecondBiggest(inputArr) {
  if (inputArr.length === 0)
    return console.log("Please input array with number");
  let biggest = inputArr[0];
  let secondBiggest = biggest;
  console.log("running the function");
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= biggest) {
      secondBiggest = biggest;
      biggest = inputArr[i];
    }
  }
  return secondBiggest;
}
// Test cases
findSecondBiggest([]);
findSecondBiggest([-1, 4, 30, 2, -4]);
findSecondBiggest([3, 4, 5, 6, 7]);
findSecondBiggest([3, 4, 5, 6, 7, 7]);
