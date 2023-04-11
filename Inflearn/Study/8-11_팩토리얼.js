function solution(n) {
  function DFS(n) {
    if (n === 1) return 1;
    else n * DFS(n - 1);
  }

  const answer = DFS(n);
  return answer;
}

/*
function solution(n) {
  let answer = 0;

  function DFS(v, mul) {
    if (v === 1) {
      answer = mul;
    } else {
      DFS(v - 1, mul * v);
    }
  }

  DFS(n, 1);

  return answer;
}
*/

console.log(solution(5));
