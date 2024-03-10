/**
 * ❌
 */

const input = 18;
let answer = 0;

let shareFive = parseInt(input / 5);
let restFive = input % 5;

if (!restFive) {
  answer = shareFive;
} else if (restFive % 3 === 0) {
  answer = shareFive + parseInt(restFive / 3);
} else {
  while (true) {
    restFive += 5;
    shareFive--;

    let shareThree = parseInt(restFive / 3);
    let restThree = restFive % 3;

    if (!restThree) {
      answer = shareFive + shareThree;
      break;
    }

    if (shareFive === 0) {
      answer = restThree ? -1 : restThree;
      break;
    }
  }
}

console.log(answer);

/* 💡
let n = 18;
let cnt = 0;
let flag = false;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    cnt += n / 5; // n % 5 === 0 일때만 작동
    console.log(cnt);
    flag = true;
    break;
  }

  n -= 3; // 안나누고 빼는것도 방법
  cnt++;
}

if (!flag) { // 정상 여부 파악
  console.log(-1);
}
*/
