function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let nBinary = N.toString(2);
  let i = nBinary.length - 1;
  let gap = 0;
  let count = 0;
  let startCount = false;

  while (i >= 0) {
    if (nBinary[i] == "1") {
      startCount = true;
      gap = Math.max(gap, count);
      count = 0;
    }

    if (startCount && nBinary[i] == "0") count++;

    i--;
  }

  return gap;
}

console.log(solution(561892));
