let input = `55-50+40`;

let i = 0;
let flag = false; // 괄호 내부인지
let target = "";
let answer = 0;
let innerSum = 0;

while (true) {
  const val = input[i];

  if (flag) {
    if (val === "+") {
      target = Number(target);
      innerSum += target;
      target = 0;
    } else if (val === "-" || i === input.length - 1) {
      if (i === input.length - 1) {
        target += val;
      }
      target = Number(target);
      innerSum += target;

      flag = false;
      answer -= innerSum;
      innerSum = 0;
    } else {
      target += val;
    }
  } else {
    if (val === "+" || val === "-" || i === input.length - 1) {
      if (i === input.length - 1) {
        target += val;
      }
      target = Number(target);
      answer += target;
      target = 0; // 초기화
      if (val === "-") {
        flag = true;
      }
    } else {
      target += val;
    }
  }

  i++;

  if (i >= input.length) {
    break;
  }
}

/* 💡
const minusArr = input.split("-");

let answer = 0;

for (let i = 0; i < minusArr.length; i++) {
  const cur = minusArr[i]
    .split("+")
    .map(Number) // 💡 Number만 넣어도 -> 축약형 (= 포인트프리 스타일)
    .reduce((acc, cur) => acc + cur);
  if (i === 0) {
    answer += cur;
  } else {
    answer -= cur; // 두번째 그룹부터 뺄셈
  }
}
*/

console.log(answer);
