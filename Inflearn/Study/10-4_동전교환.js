function solution(m, coin) {
  const len = coin.length;
  const dy = Array(m + 1).fill(Number.MAX_SAFE_INTEGER); // 1000(문제 조건상 안넘어갈수있)

  // 1 2 5
  for (let i = 0; i < len; i++) {
    const val = coin[i];
    for (let j = val; j <= m; j++) {
      // 1부터 아니고 val(나보단 커야)
      const num = m / val;
      const rest = parseInt(m % val);
      const newVal = rest === 0 ? num : num + dy[rest];
      dy[j] = Math.min(dy[j], newVal);
      // # dy[j] = Math.min(dy[j], dy[j - val] + 1)
    }
  }

  return dy[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
