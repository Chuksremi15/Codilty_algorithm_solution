// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!Array.isArray(A) || A.length === 0) return A;

  for (n of A) {
    if (n > 1000 || n < -1000) return A;
  }

  for (let i = 0; i < K; i++) {
    let temp = A.pop();
    A.unshift(temp);
  }

  return A;
}

const array = [3, 8, 9, 7, 6];
const k = 3;

console.log(solution(array, k));
