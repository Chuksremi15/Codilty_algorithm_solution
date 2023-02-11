//1. brackets(Easy)
function solution(S) {
  S = S.split("");
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "{" || S[i] === "[" || S[i] === "(") {
      stack.push(S[i]);
    } else if (S[i] === "}" || S[i] === "]" || S[i] === ")") {
      let equChar = stack.pop() + S[i];

      if (equChar !== "{}" && equChar !== "[]" && equChar !== "()") {
        return 0;
      }
    } else {
      return 0;
    }
  }

  if (stack.length > 0) return 0;

  return 1;
}

// 2.
