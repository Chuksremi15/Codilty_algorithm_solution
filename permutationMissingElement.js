function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!Array.isArray(A) || A.length === 0 || A.length > 100000) return A;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 100001) return A;
  }

  A.sort((a, b) => a - b);

  let num = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == num) num++;
    else return i + 1;
  }

  return num;
}
