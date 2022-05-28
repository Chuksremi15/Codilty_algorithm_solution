function timeConversion(s) {
  let sArr = s.split("");

  let determinant;
  let len = sArr.length;

  // Write your code here

  determinant = sArr[len - 2] + sArr[len - 1];

  console.log(determinant);
  sArr.pop();
  sArr.pop();

  let time = Number(sArr[0] + sArr[1]);

  if (determinant === "PM") {
    if (time !== 12) {
      let StrTime = (time + 12).toString();
      sArr.splice(0, 2, StrTime[0], StrTime[1]);
      return sArr.join("");
    }

    if (time == 12) {
      return sArr.join("");
    }
  }

  if (determinant === "AM") {
    if (time !== 12) {
      return sArr.join("");
    }
    if (time == 12) {
      sArr.splice(0, 2, "0", "0");
      return sArr.join("");
    }
  }

  return s;
}

const s = "07:05:45PM";

console.log(timeConversion(s));
