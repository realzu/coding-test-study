function solution(m, ps, pt) {
  let max = Number.MIN_SAFE_INTEGER;

  function DFS(L, sum, time) {
    if (time > m) return;

    if (L === ps.length) {
      max = Math.max(sum, max);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);

  return max;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
