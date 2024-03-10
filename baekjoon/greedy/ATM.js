let input = `5
3 1 4 3 2`;
input = input.split("\n");

let [n, p] = input;
p = p.split(" ");
let sum = 0;

// 💡 정렬
p.sort((a, b) => a - b);

// 1
for (let i = 0; i < p.length; i++) {
  let innerSum = 0;
  for (let j = 0; j <= i; j++) {
    innerSum += Number(p[j]);
  }
  sum += innerSum;
}

// 2 💡
// let max = 0;
// for (let i = 0; i < p.length; i++) {
//   max += Number(p[i]);
//   sum += max;
// }

console.log(sum);
