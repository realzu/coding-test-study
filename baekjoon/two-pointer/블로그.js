let input = `5 2
1 4 2 5 1`;

const a = input.split("\n")[0];
const arr = input.split("\n")[1].split(" ").map(Number);
let [n, x] = a.split(" ").map(Number); // 💡 number로 변환!

let sum = 0; // 내부 합

for (let i = 0; i < x; i++) {
  sum += arr[i];
}

if (!sum) {
  console.log("SAD");
  return;
}

let max = sum;
let cnt = 1; // 몇 개

let j = 0; // head
for (let i = x; i < n; i++) {
  sum = sum + arr[i] - arr[j];
  if (sum > max) {
    max = sum;
    cnt = 1;
  } else if (sum === max) {
    cnt++;
  }
  j++;
}

console.log(max);
console.log(cnt);

// 💡 => 슬라이딩 윈도우
