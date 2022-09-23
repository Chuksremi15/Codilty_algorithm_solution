// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) return 1;
  if (A.length === 2) {
    if (A[0] !== A[1]) return 1;
    else return 1;
  }

  let current = 0;
  let former = 0;
  let result = 0;

  let len = A.length;

  let back = 0;
  let front = len - 1;

  while (front >= back) {
    if (Math.abs(A[front]) >= Math.abs(A[back])) {
      current = Math.abs(A[front]);
      front--;
    } else {
      current = Math.abs(A[back]);
      back++;
    }

    if (current !== former) result++;

    former = current;
  }

  return result;
}
