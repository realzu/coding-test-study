let s = 200;
let cnt = 0;
let sum = 0;

while (sum + cnt <= s) {
  sum += cnt;
  cnt++;
}

/*
다른 방법
while (sum <= s) {
    cnt++;
    sum += cnt
}
*/

console.log(--cnt);
