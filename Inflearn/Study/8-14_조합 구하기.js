// ##

function solution(n, m) {
  const answer = [];
  const tmp = Array(m).fill(0);

  function DFS(L, v) {
    if (L === m) {
      answer.push(tmp.concat());
    } else {
      for (let i = v; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
