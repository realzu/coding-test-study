let input = `472
385`.split("\n");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

const arr = b.toString().split("");

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(a * Number(arr[i]));
}

console.log(a * b);
