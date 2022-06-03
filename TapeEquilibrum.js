// 0(N * N) time complexity detected
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2 || A.length > 100000) return A;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < -1000 || A[i] > 1000) return A;
  }

  let mindiff = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    let firstPath = 0;
    let secondPath = 0;

    for (let k = 0; k < i + 1; k++) {
      firstPath += A[k];
    }

    for (let j = A.length - 1; j > i; j--) {
      secondPath += A[j];
    }

    let diff = Math.abs(secondPath - firstPath);

    mindiff = Math.min(diff, mindiff);
  }

  return mindiff;
}

// 0(N) time complexity
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2 || A.length > 100000) return A;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < -1000 || A[i] > 1000) return A;
  }

  let leftSum = A[0];
  let rightSum = 0;
  let minDiff = Infinity;

  for (let i = 1; i < A.length; i++) {
    rightSum += A[i];
  }

  for (let i = 1; i < A.length; i++) {
    let diff = Math.abs(rightSum - leftSum);
    minDiff = Math.min(diff, minDiff);

    leftSum += A[i];
    rightSum -= A[i];
  }

  return minDiff;
}
