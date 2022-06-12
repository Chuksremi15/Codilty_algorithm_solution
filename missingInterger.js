function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let lastelemIndex = A.length - 1;
  A.sort((a, b) => a - b);
  count = 1;

  if (A[lastelemIndex] < 0) return 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == count) count++;
  }

  return count;
}
