let input = `100 40021`;

let [a, b] = input.split(" ").map(Number);
let cnt = 0;
let flag = false;

while (b >= a) {
  if (b === a) {
    flag = true;
  }

  if (b % 2 === 0) {
    b /= 2;
  } else {
    // 💡 --> b % 10 나누는 조건이 있어야함!
    b = b.toString();
    b = Number(b.slice(0, b.length - 1)); // b = parseInt(b / 10)
  }

  /* 💡
  if (b % 2 === 0) b /= 2;
  else if (b % 10 === 1) b = parseInt(b / 10); 
  else break;
  */

  cnt++;
}

console.log(flag ? cnt : -1);
