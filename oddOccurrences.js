function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!Array.isArray(A) || A.length === 0 || A.length > 1000000) return A;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 1000000000 || A[i] < -1000000000) return A;
  }
  // write your code in JavaScript (Node.js 8.9.4)

  let oddOcur = 0;

  for (let i = 0; i < A.length; i++) {
    oddOcur ^= A[i];
  }

  return oddOcur;
}
