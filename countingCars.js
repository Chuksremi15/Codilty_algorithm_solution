// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pairs = 0;
    let count = 0;

    for(let i = 0; i < A.length; i++){
        if( A[i] == 1){
            pairs += count
        } else {
          count++
        }
    }

    if (pairs > 1000000000 || pairs < 0) return -1

    else return pairs;

}

