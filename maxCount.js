// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxCount = 0;
  let count = new Map();
  let result = [];

  for (let i = 0; i < N; i++) {
    count.set(i + 1, 0);
  }

  function setCounterToMax(max) {
    for (let i = 0; i < N; i++) {
      count.set(i + 1, max);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] == N + 1) setCounterToMax(maxCount);
    else {
      count.set(A[i], count.get(A[i]) + 1);
      maxCount = Math.max(count.get(A[i]), maxCount);
    }
  }

  count.forEach((value, key) => {
    result.push(value);
  });

  return result;
}

//100%  correctness
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxCount = 0;
  let newMax = 0;
  let count = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    let X = A[i] - 1;
    if (A[i] == N + 1) maxCount = newMax;
    else {
      count[X] = Math.max(count[X] + 1, maxCount + 1);
      newMax = Math.max(count[X], newMax);
    }
  }

  // update any counters to maxToSet that we havent yet
  count = count.map((val) => Math.max(val, maxCount));
  return count;
}
