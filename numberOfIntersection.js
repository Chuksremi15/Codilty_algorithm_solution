// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  len = A.length;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let diff = Math.abs(j - i);

      if (diff <= A[j] + A[i]) count++;
    }
  }

  return count;
}
