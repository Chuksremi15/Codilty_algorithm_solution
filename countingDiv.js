// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A, B, K) {
//   // write your code in JavaScript (Node.js 8.9.4)

//   let count = Math.floor((B - A) / K);

//   if (A % K == 0 || B % K == 0) count++;

//   return count;
// }

// function solution(A, B, K) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let count;
//   let newbase = 0;
//   if (B % K !== 0) {
//     while (A <= B) {
//       if (A % K == 0) {
//         newbase = A;
//         break;
//       }
//       A++;
//     }

//     let count = Math.floor((B - newbase) / K);

//     if (newbase % K == 0 || B % K == 0) count++;

//     return count;
//   } else {
//     let count = Math.floor((B - A) / K);

//     if (A % K == 0 || B % K == 0) count++;

//     return count;
//   }
// }

// function solution(A, B, K) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let count = 0;

//   while (A <= B) {
//     if (A % K == 0) count++;
//     A++;
//   }

//   return count;
// }

function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let numArr = N.toString().split("");
  let maxArr = [];
  let num;
  let diff;

  console.log(numArr);

  for (let i = 0; i < numArr.length; i++) {
    num = Number(numArr[i]);
    console.log(numArr);

    if (num < 9) {
      diff = 9 - num;
      console.log(diff);
    }
  }
}

console.log(solution(512, 10));
