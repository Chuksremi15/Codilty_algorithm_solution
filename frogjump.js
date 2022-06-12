// function solution(X, Y, D) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const maxNum = 1000000000;
//   if (X > maxNum || Y > maxNum || D > maxNum || X > Y) return 0;
//   return Math.ceil((Y - X) / D);
// }

console.log(-1 ^ -1);

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numArr = N.toString().split("");
  let maxArr = [];
  let num;
  let diff;

  for (let i = 0; i < numArr.length; i++) {
    num = Number(numArr[i]);

    if (num == 9) {
      maxArr.push(num);
    } else {
      diff = 9 - num;
      if (K > diff) {
        maxArr.push(num + diff);
        K = K - diff;
      } else {
        maxArr.push(num + K);
        K = 0;
      }
    }
  }

  return Number(maxArr.join(""));
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sumOfInt = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 4 == 0) {
      sumOfInt += A[i];
    }
  }

  return sumOfInt;
}
