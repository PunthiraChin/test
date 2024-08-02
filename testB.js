function findMaxSum(numArray, k) {
  // Check if k is higher than the total amount of numbers in the array
  if (numArray.length < k) return console.log("Array length is less than k");

  let maxSum = -Infinity;
  for (let i = 0; i < numArray.length - k; i++) {
    let eachSum = 0;
    for (let j = 0; j < k; j++) {
      eachSum += numArray[i + j];
    }
    if (eachSum > maxSum) {
      maxSum = eachSum;
    }
  }
  return maxSum;
}

// Test cases
findMaxSum([], 1);
findMaxSum([1, 4, -1, 2, 3], 3);
findMaxSum([1, 4, -1, 2, 3], 2);
