// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

let input = "7 3";
input = input.split("\n");
let line = input[0].split(" ");
let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(parseInt(a % b));
