// ##

function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => []);
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let x of graph[v]) {
        if (ch[x] === 0) {
          ch[x] = 1;
          DFS(x);
          ch[x] = 0;
        }
      }
    }
  }
  /*
    dfs(1) -> (2) -> (3) -> (4) -> (5)
    dfs(1) -> (2) -> (5)
    */

  ch[1] = 1; // 1번 노드는 출발점이니까 항상 체크
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
