function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let i = 0;

  const proceed = A.every(function (num) {
    return num > -1000 && num < 1000;
  });

  if (proceed) {
    while (i < K) {
      const temp = A.pop();
      A.unshift(temp);
      i++;
    }

    return A;
  } else return "array does not pass value given";
}
// function solution(A, K) {

//  const proceed =   A.every( function(num){
//      return num > -1000 && num < 1000
//  })

//  if(proceed){
//       let temp = A.splice(A.length - K)

//       temp =  temp.concat(A)

//     return temp;
//  } else return 'array does not pass value given'

// }

//  const mostChar= function(str){

//     let map = {};
//      let max = 0;

//     for(const char of str){
//         if(!map[char]){
//             map[char] =  1;
//         }else{
//             map[char]++
//             let value = map[char]
//             max = Math.max(max, value)
//         }
//     }
//     return max;
// }

const mostChar = function (str) {
  let map = new Map();
  let max = 0;

  for (const char of str) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      let charvalue = map.get(char);
      map.set(char, charvalue + 1);
      max = Math.max(max, map.get(char));
    }
  }
  return max;
};

const arrayDiff = function (A, k) {
  const result = [];
  const objectValue = {};

  for (let i = 0; i < A.length; i++) {
    objectValue[i] = A[i];
  }

  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A.length; j++)
      if (objectValue[i] - objectValue[j] == k) {
        //   result.push([A[i], objectValue[j]])
        result.push([objectValue[i], objectValue[j]]);
      }
  }
  return result;
};

// const arrayDiff = function(A, k) {

//     const result = []
//     const objectValue = []

//     for(let i = 0; i < A.length; i++){
//           var currNum = A[i]
//           var counterpath = k + currNum

//        if(objectValue.indexOf(counterpath) !== -1){
//           result.push([currNum, counterpath])
//        }
//        else{
//         objectValue.push(currNum)
//        }
//     }
//     return result;
// }

const findPermutationInString = function (str, wrd) {
  let a = [];
  let count = 0;
  const obj = {};

  this.objwrd = function () {
    for (let i = 0; i < wrd.length; i++) {
      if (!obj[wrd[i]]) {
        obj[wrd[i]] = 1;
      } else {
        obj[wrd[i]]++;
      }
    }
  };

  this.objwrd();

  for (let i = 0; i < str.length; i++) {
    a.push(str[i]);
  }

  for (let i = 0; i < a.length; i++) {
    let subA = a.slice(i, i + wrd.length);
    for (let j = 0; j < subA.length; j++) {
      if (obj[subA[j]]) {
        obj[subA[j]]--;
      }
    }

    let value = false;

    for (let j = 0; j < wrd.length; j++) {
      if (obj[wrd[j]] !== 0) {
        value = true;
      }
    }

    if (value === false) {
      count = count + 1;
      this.objwrd();
    }

    if (value === true) {
      for (let i = 0; i < wrd.length; i++) {
        obj[wrd[i]] = 0;
      }

      this.objwrd();
    }
  }
  return count;
};

// const replaceSpace = function (str) {
//   str = str.trim();

//   for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i) - "a");
//   }

//   str = str.split(" ");

//   for (let i = 0; i < str.length; i++) {
//     if (i != str.length - 1) {
//       let temp = str[i];
//       temp = temp + "%20";
//       str[i] = temp;
//     }
//   }

//   return str.join("");
// };

const checkDuplicate = function (str) {
  let strObject = new Map();

  for (let char of str) {
    if (strObject.has(char)) {
      return false;
    }
    strObject.set(char, 0);
  }

  return true;
};

var permute = function (nums) {
  return permuteAux(nums, []);
};

var permuteAux = function (nums, partialNums) {
  if (nums === null || nums.length === 0) {
    return [partialNums];
  }
  var listArrays = [];
  for (var i = 0; i < nums.length; i++) {
    var withoutI = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    var partial = partialNums.concat([nums[i]]);
    var sol = permuteAux(withoutI, partial);
    if (sol.length !== 0) {
      listArrays = listArrays.concat(sol);
    }
  }
  return listArrays;
};

const stringCompression = function (str) {
  let compressedString = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    curStr = str[i];
    nextStr = str[i + 1];

    if (curStr == nextStr) {
      count++;
    } else {
      compressedString += curStr + count;
      count = 1;
    }
  }

  return str.length > compressedString.length ? compressedString : str;
};

let isSubstring = function (str1, str2) {
  strObject = {};

  for (let char of str1) {
    if (!strObject[char]) strObject[char] = 1;
    else strObject[char]++;
  }

  for (let char of str2) {
    strObject[char]--;
  }

  for (let char of str1) {
    if (strObject[char] != 0) return false;
  }

  return true;
};

// console.log(isSubstring("waterbottle", "erbottlewat"));

const palidrumPermutation = function (str) {
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.join("");
  let strObject = new Map();
  let index = 0;

  for (let char of str) {
    if (!strObject.has(char)) strObject.set(char, 1);
    else {
      let value = strObject.get(char);
      value++;
      strObject.set(char, value);
    }
  }

  strObject.forEach((char) => {
    if (char % 2 == 1) index = index + 1;
  });

  if (index > 1) return false;
  else return true;
};

const oneAway = function (str1, str2) {
  let strObject = {};
  let index = 0;

  for (let char of str1) {
    if (!strObject[char]) strObject[char] = 1;
    else strObject[char]++;
  }
  for (let char of str2) {
    strObject[char]--;
  }

  for (let char of str1) {
    if (strObject[char] == 1) index++;
  }

  console.log(index);

  if (index > 1) return false;
  else return true;
};

function diagonalDifference(arr) {
  if (arr.length < 2) return console.log("does not match contraints");
  var firstDiagonal = 0;
  var secondDiagonal = 0;

  for (let i = 0, j = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][j];
    j++;
  }

  for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
    secondDiagonal += arr[i][j];
    j--;
  }

  var anwser = Math.abs(firstDiagonal - secondDiagonal);

  return anwser;
}

function plusMinus(arr) {
  // Write your code here

  var negative = 0;
  var positive = 0;
  var zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;

    if (arr[i] < 0) negative++;

    if (arr[i] === 0) zero++;
  }

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

// function staircase(n) {
//   // Write your code here

//   var eS = " ";

//   console.log(eS + eS + "#");
//   console.log(eS + "#");
//   console.log(eS + "#");
//   console.log(eS + "#");
// }

function minimumDistances(a) {
  if (a == null || a == undefined) return null;
  if (a.length == 0) return null;
  // Write your code here
  let minDistance = null;

  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], i);
    } else {
      let dupIndex = map.get(a[i]);
      let value = Math.abs(i - dupIndex);

      if (minDistance == null) {
        minDistance = value;
      } else {
        minDistance = Math.min(minDistance, value);
      }
    }
  }

  if (minDistance == null) return -1;
  else return minDistance;
}

function solution(N) {
  let binary = (N >>> 0).toString(2);

  let binaryArr = binary.split("");

  binaryArr.unshift;
  console.log(binaryArr);

  let map = new Map();

  let maxDiff = null;

  for (let i = 0; i < binaryArr.length; i++) {
    if (!map.has(binaryArr[i]) && binaryArr[i] == "1") {
      map.set(binaryArr[i], i);
    } else if (binaryArr[i] == "1") {
      let dupIndex = map.get(binaryArr[i]);
      let value = Math.abs(i - dupIndex);
      map.set(binaryArr[i], i);

      if (maxDiff == null) {
        maxDiff = value;
      } else {
        maxDiff = Math.max(maxDiff, value);
      }
    }
  }

  if (maxDiff == null) return 0;
  else return maxDiff - 1;
}

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length == 0) return A;

  let i = 0;

  while (i < K) {
    let temp = A.pop();

    A.unshift(temp);

    i++;
  }

  return A;
}
function solutionn(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length == 0) return A;
  if (A.length == 1) return A[0];

  for (let i = 0; i < A.length; i++) {
    if (!map[A[i]]) {
      map[A[i]] = 1;
    } else {
      map[A[i]]++;
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (map[A[i]] == 1) {
      return A[i];
    }
  }

  return 0;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let xOr = 0;
  A.forEach((e) => {
    xOr = xOr ^ e;
  });
  return xOr;
}

function PermMissingElem(A) {
  let aSum = 0;
  let bSum = 0;

  for (let i = 0; i < A.length; i++) {
    aSum += A[i];
  }
  for (let i = 1; i < A.length + 2; i++) {
    bSum += i;
  }

  return bSum - aSum;
}

function PermMissingElem(A) {
  let aSum = 0;
  let xOR = 0;

  for (let i = 0; i < A.length; i++) {
    xOR ^= A[i] ^ i;
  }

  return xOR;
}

function minValue(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum1 = 0;
  let sum2 = A.reduce((a, b) => a + b);

  let mindiff = Infinity;

  for (i = 0; i < A.length - 1; i++) {
    sum1 += A[i];
    sum2 -= A[i];
    let diff = sum2 - sum1;
    mindiff = Math.min(mindiff, Math.abs(diff));
  }
  return mindiff;
}

function frogjump(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let leaves = new Map();
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (!leaves.has(A[i])) {
      leaves.set(A[i], 1);
      count++;
    }

    if (count == X) return i;
  }

  return -1;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let xOr = 0;

  A.forEach((e) => {
    xOr = xOr ^ e;
  });
  console.log(xOr);
}

function PermMissingElem(A) {
  let xOR = 0;

  for (let i = 0; i < A.length + 1; i++) {
    xOR ^= A[i] ^ (i + 1);
  }

  return xOR;
}

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCount = 0;
  let counter = {};

  let setCount = (maxCount) => {
    for (let i = 1; i <= N; i++) {
      counter[i] = maxCount;
    }
  };

  console.log(counter);
  for (let i = 0; i < A.length; i++) {
    if (!counter[A[i]]) {
      if (A[i] > N) setCount(maxCount);
      if (A[i] <= N) {
        counter[A[i]] = 1;
        maxCount = Math.max(counter[A[i]], maxCount);
      }
    } else {
      if (A[i] > N) setCount(maxCount);
      if (A[i] <= N) {
        counter[A[i]]++;
        maxCount = Math.max(counter[A[i]], maxCount);
      }
    }
  }

  let array = [];

  for (const [key, value] of Object.entries(counter)) {
    array.push(value);
  }

  return array;
}
function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCount = 0;
  let counter = {};

  let setCount = (maxCount) => {
    for (let i = 1; i <= N; i++) {
      counter[i] = maxCount;
    }
  };

  setCount(maxCount);

  console.log(counter);
  for (let i = 0; i < A.length; i++) {
    if (!counter[A[i]]) {
      if (A[i] > N) setCount(maxCount);
      if (A[i] <= N) {
        counter[A[i]] = 1;
        maxCount = Math.max(counter[A[i]], maxCount);
      }
    } else {
      if (A[i] > N) setCount(maxCount);
      if (A[i] <= N) {
        counter[A[i]]++;
        maxCount = Math.max(counter[A[i]], maxCount);
      }
    }
  }

  let array = [];

  for (const [key, value] of Object.entries(counter)) {
    array.push(value);
  }

  return array;
}

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCount = 0;
  let counter = {};

  let setCount = (maxCount) => {
    for (let i = 1; i <= N; i++) {
      counter[i] = maxCount;
    }
  };

  setCount(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) setCount(maxCount);
    if (A[i] <= N) {
      counter[A[i]]++;
      maxCount = Math.max(counter[A[i]], maxCount);
    }
  }

  let array = [];

  for (const [key, value] of Object.entries(counter)) {
    array.push(value);
  }

  return array;
}

function solution(A) {
  let sort_unique = (arr) => {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) {
      return a * 1 - b * 1;
    });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
      //Start loop at 1: arr[0] can never be a duplicate
      if (arr[i - 1] !== arr[i]) {
        ret.push(arr[i]);
      }
    }
    return ret;
  };

  A = sort_unique(A);

  if (A[A.length - 1] < 0) return 1;

  let less = 0;

  let lessthan = () => {
    for (var i = 0; i < A.length; i++) {
      if (A[i] > 0) {
        return less;
      }
      less++;
    }
  };

  let lessthanValue = lessthan();

  A = A.splice(lessthanValue);

  let index = 1;

  for (var i = 0; i < A.length; i++) {
    if (A[i] !== index) {
      return index;
    }
    index++;
  }

  return index;
}

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCount = 0;
  let counter = {};

  let setCount = (maxCount) => {
    for (let i = 1; i <= N; i++) {
      counter[i] = maxCount;
    }
  };

  setCount(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) setCount(maxCount);
    if (A[i] <= N) {
      counter[A[i]]++;
      maxCount = Math.max(counter[A[i]], maxCount);
    }
  }

  let array = [];

  for (const [key, value] of Object.entries(counter)) {
    array.push(value);
  }

  return array;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A == B) return 0;

  for (let i = A; i <= B; i++) {
    if (i % K == 0) {
      let value = B - A;
      value = Math.floor(value / K);
      return value + 1;
    }
  }

  return 0;
}

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)

  let minArray = [];
  let ahamoment;

  let min;

  let dnaSequence = "ACGT";

  let map = {};

  for (let i = 0; i < dnaSequence.length; i++) {
    map[dnaSequence[i]] = i + 1;
  }

  for (let i = 0; i < P.length; i++) {
    if (P[i] == Q[i]) {
      min = map[S[P[i]]];
      minArray.push(min);
    } else {
      ahamoment = function () {
        for (let j = P[i]; j < Q[i] + 1; j++) {
          if (S[j] == "A") return 1;
        }
        for (let j = P[i]; j < Q[i] + 1; j++) {
          if (S[j] == "C") return 2;
        }
        for (let j = P[i]; j < Q[i] + 1; j++) {
          if (S[j] == "G") return 3;
        }
        for (let j = P[i]; j < Q[i] + 1; j++) {
          if (S[j] == "T") return 4;
        }
      };

      min = ahamoment();

      minArray.push(min);
    }
  }

  if (minArray.length == 0) return minArray;
  else return minArray;
}
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)

  let minArray = [];

  for (let i = 0; i < P.length; i++) {
    subStringVal = S.substring(P[i], Q[i] + 1);

    if (subStringVal.indexOf("A") !== -1) {
      minArray.push(1);
      continue;
    }
    if (subStringVal.indexOf("C") !== -1) {
      minArray.push(2);
      continue;
    }
    if (subStringVal.indexOf("G") !== -1) {
      minArray.push(3);
      continue;
    }

    minArray.push(4);
  }

  if (minArray.length == 0) return minArray;
  else return minArray;
}

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  let dnaSequence = "ACGT";

  let map = {};

  for (let i = 0; i < dnaSequence.length; i++) {
    map[dnaSequence[i]] = i + 1;
  }

  let minValue = Infinity;

  let findMin = function (str) {
    for (let i = 0; i < str.length; i++) {
      minValue = Math.min(minValue, map[str[i]]);
    }

    return minValue;
  };

  let minArray = [];

  let subStringVal;

  let newMinValue = "";

  for (let i = 0; i < P.length; i++) {
    if (P[i] == Q[i]) {
      newMinValue = map[S[P[i]]];

      minArray.push(newMinValue);
    } else {
      subStringVal = S.substring(P[i], Q[i] + 1);

      let distinctstr = function (str) {
        return String.prototype.concat(...new Set(str));
      };

      distinctstrval = distinctstr(subStringVal);

      newMinValue = findMin(distinctstrval);

      minArray.push(newMinValue);
      minValue = Infinity;
    }
  }

  if (minArray.length == 0) return minArray;
  else return minArray;
}
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (A.length < 2 || A.length > 100000) return 0;

  let sum = 0;
  let averageSum = 0;

  let minAve = Infinity;

  let position = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < -10000 || A[i] > 10000) return 0;
    if (A[i + 1] < -10000 || A[i + 1] > 10000) return 0;
    sum = A[i] + A[i + 1];

    averageSum = sum / 2;

    if (minAve > averageSum) {
      minAve = averageSum;
      position = i;
    }

    if (A[i + 2]) sum += A[i + 2];

    averageSum = sum / 3;

    if (minAve > averageSum) {
      minAve = averageSum;
      position = i;
    }

    sum = 0;
  }

  return position;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let numPairs = 0;
  let result = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] == 1) {
      numPairs++;
    } else {
      result += numPairs;
      if (result > 1000000000) return -1;
    }
  }

  return result;
}

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxCount = 0;
  let counters = Array(N).fill(0);
  let checkupdated = 0;

  if (A.indexOf(N + 1) === -1) {
    for (let j = 0; j < A.length; j++) {
      counters[A[j] - 1]++;
    }
    return counters;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N && checkupdated === 0) {
      checkupdated = 1;
      for (let j = 0; j < counters.length; j++) {
        counters[j] = max;
      }
    }
    if (A[i] <= N) {
      checkupdated = 0;
      counter[A[i] - 1]++;
      maxCount = Math.max(counter[A[i] - 1], maxCount);
    }
  }

  return counters;
}

function destructuring() {
  // const myObject = {
  //   name: "sammy",
  //   birthday: "5-12-2002",
  //   mothersname: "oma",
  // };
  // const { ...rest } = myObject;
  // console.log({ ...rest });
  // console.log(rest);
}

console.time();

const filterItem = () => {
  const variation = {
    express: [
      {
        _id: "617d52e3edecb43a4c9a06f2",
        name: "Bottle",
        price: 300,
        stock: 4,
      },
      {
        _id: "617d52e3edecb43a4c9a06f3",
        name: "Packet",
        price: 700,
        stock: 7,
      },
    ],

    portal: [
      {
        _id: "617d52e3edecb43a4c9a06f4",
        name: "Bottle",
        price: 200,
        stock: 4,
      },
      {
        _id: "617d52e3edecb43a4c9a06f5",
        name: "Packet",
        price: 400,
        stock: 5,
      },
    ],
  };

  let variationItem;

  for (let j = 0; j < variation.express.length; j++) {
    variationItem = variation.express.filter(
      (value) => value._id == "617d52e3edecb43a4c9a06f3"
    );
  }

  return variationItem;
};

const value = filterItem();
console.log(value);

console.timeEnd();
