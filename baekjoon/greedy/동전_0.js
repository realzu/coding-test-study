let input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;
input = input.split("\n");

let [n, k] = input[0].split(" ");
const arr = input.slice(1);
let sum = 0;

for (let i = arr.length - 1; i >= arr[0]; i--) {
  const val = arr[i];
  const result = parseInt(k / val);
  if (result > 0) {
    sum += result;
    k -= val * result; // 💡 k %= val; // 해당 동전으로 거슬러 준 뒤 남은 금액
  }

  if (k === 0) {
    console.log(sum);
    return sum;
  }
}
