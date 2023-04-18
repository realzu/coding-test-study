// #

function solution(m, arr) {
  let answer = 0;
  const n = arr.length;
  const dy = Array(m + 1).fill(0); // 배열길이는 '시간'기준 (시간별 최댓값)

  for (let i = 0; i < n; i++) {
    const [ps, pt] = arr[i];
    for (let j = m; j >= pt; j--) {
      // 끝부터 해야 중복x (앞부터하면 나를 계속 더함)
      dy[j] = Math.max(dy[j], dy[j - pt] + ps); // 자기를 뺀 시간의 최댓값 + 내값
    }
  }

  return dy[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
