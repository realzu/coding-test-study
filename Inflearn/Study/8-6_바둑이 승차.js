function solution(c, arr) {
  let max = Number.MIN_SAFE_INTEGER;

  function DFS(L, sum) {
    // if (sum > c) return; -- # 추가: 합 넘어가면 굳이 돌 필요x (메모리 최소화!)
    if (L === arr.length) {
      if (sum <= c) max = Math.max(max, sum); // (여기 if문을 위로)
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return max;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
